import {computed, ComputedRef, Ref, ref, watch} from "vue";
import useNotificationMessage, {NotificationType} from "src/modules/shared/utils/notificationMessage";
import {useAuthStore} from "src/modules/auth/store";
import {User} from "src/modules/administration/users/types";
import moment from "moment-timezone";
import {Contact, Message} from "src/modules/administration/users/types";
import {nanoid} from "nanoid";
import {useBase64, useDropZone} from "@vueuse/core";
import {copyToClipboard} from "quasar";

export enum ChatMode {
  LOADING = 'loading',
  ERROR = 'error',
  CONTACTS = 'contacts',
  CHAT = 'chat'
}

export interface ConnectionOpenedMessage {
  fromUser: number,
  socketId: string,
  messageType: MessageTypesEnum
}

export interface ConnectionClosedMessageSend {
  fromUser: number,
  socketId: string,
  messageType: MessageTypesEnum
}

export interface UserStoppedTypingMessage {
  fromUser: number,
  socketId: string,
  messageType: MessageTypesEnum
}

export interface UpdateSentMessagesMessage {
  file_url?: string,
  fileName?: string,
  fromUser: number,
  id: string,
  message: string,
  messageSeenAt?: string,
  messageTimeStamp: string,
  messageType: MessageTypesEnum,
  message_content_type: string,
  mime_main_type?: string,
  mime_sub_type?: string,
  toUser: number
}

export interface NewConnectionMessage {
  messageType: MessageTypesEnum,
  activeUserIds: number[]
}

export interface LoadChatMessage {
  messageType: MessageTypesEnum,
  messages: {
    created_at: string,
    file_name?: string,
    file_url?: string,
    id: string,
    is_message_seen: boolean,
    message_content: string,
    message_content_type: string,
    message_from_user_id: string,
    message_seen_at?: string,
    message_to_user_id: string,
    mime_main_type?: string,
    mime_sub_type?: string
  }[],
  allFiles: {
    created_at: string,
    file_name: string,
    file_url: string,
    id: string,
    is_message_seen: boolean,
    message_content?: string,
    message_content_type: string,
    message_from_user_id: string,
    message_seen_at?: string,
    message_to_user_id: string,
    mime_main_type: string,
    mime_sub_type: string
  }[],
  gallery: {
    created_at: string,
    file_name: string,
    file_url: string,
    id: string,
    is_message_seen: boolean,
    message_content: string,
    message_content_type: string,
    message_from_user_id: string,
    message_seen_at?: string,
    message_to_user_id: string,
    mime_main_type: string,
    mime_sub_type: string
  }[]
}

export interface LoadUnseenMessagesNotification {
  messageType: MessageTypesEnum,
  unseenMessages: {
    message_from_user_id: string,
    unseen_messages_count: string
  }[]
}

export interface ConnectionClosedMessageReceive {
  messageType: MessageTypesEnum,
  activeUserIds: number[]
}

export interface NewMessage {
  fromUser: number,
  toUser: number,
  id: string,
  message: string,
  messageTimeStamp: string,
  messageType: MessageTypesEnum,
  message_content_type: string,
  mime_main_type?: string,
  mime_sub_type?: string,
  fileName?: string,
  file_url?: string
}

export interface FailedToSendMessage {
  fromUser: number,
  id: string,
  message: string,
  messageType: MessageTypesEnum,
  toUser:number
}
export interface UpdateClientIdMessage {
  messageType: MessageTypesEnum,
  clientMessageId: string,
  isResent: boolean,
  message_content_type: string,
  mime_main_type?: string,
  file_url?: string,
  fileName?: string
  serverMessageId: string,
  toUser: number
}

export interface UserIsTypingMessage{
  fromUser: number,
  toUser: number,
  message: string,
  messageType: MessageTypesEnum
}

export interface UpdateMessageReadStatus {
  fromUser: number,
  toUser: number,
  messageType: MessageTypesEnum,
  socketId: string,
  message: string,
}

export interface UpdateMessageReadStatusIncoming {
  fromUser: number,
  toUser: number,
  messageType: MessageTypesEnum,
  messageSeenAt: string,
}
export enum MessageTypesEnum {
  CONNECTION_OPEN = 'CONNECTION OPEN',
  LOAD_CHAT = 'LOAD CHAT',
  SEND_MESSAGE = 'SEND MESSAGE',
  USER_IS_TYPING = 'USER IS TYPING',
  USER_STOPPED_TYPING = 'USER STOPPED TYPING',
  UPDATE_MESSAGE_READ_STATUS = 'UPDATE MESSAGE READ STATUS',
  CLOSE_CONNECTION = 'CLOSE CONNECTION',
  LOAD_UNSEEN_MESSAGES_NOTIFICATION = 'LOAD UNSEEN MESSAGES NOTIFICATION',
  NEW_CONNECTION = 'NEW CONNECTION',
  UPDATE_SENT_MESSAGES = 'UPDATE SENT MESSAGES',
  NEW_MESSAGE = 'NEW MESSAGE',
  FAILED_TO_LOAD_CHAT = 'FAILED TO LOAD CHAT',
  FAILED_TO_SEND_MESSAGE = 'FAILED TO SEND MESSAGE',
  UPDATE_CLIENT_MESSAGE_ID = 'UPDATE CLIENT MESSAGE ID',
  CONNECTION_CLOSED = 'CONNECTION CLOSED',
  FORWARD_MESSAGES = 'FORWARD_MESSAGES',
  FAILED_TO_FORWARD_MESSAGE = 'FAILED_TO_FORWARD_MESSAGE'
}

type SocketMessage = {
  fromUser: number,
  toUser?: number,
  message?: string,
  fileName?: string
  messageContentType?: string,
  messageType: MessageTypesEnum,
  socketId: string,
  offset?: number,
  messageTimeStamp?: string,
  messageId?: string,
  clientMessageId?: string
  serverMessageId?: string,
  isResent?: boolean
}
export default function useChat() {
  const authUserStore = useAuthStore();

  const authenticatedUser: ComputedRef<User> = computed(function () {
    return authUserStore.getUser
  })
  const scrollAreaRef = ref()

  const showScrollToBottomButton = ref(false);

  const inputRef = ref()

  const contacts = ref(authUserStore.contacts);

  const chatMode = ref('loading');


  const chattingTo: Ref<undefined | Contact> = ref(undefined)

  const message = ref();
  const icon = ref('highlight_off');

  const setChattingTo = (contactId: number) => {
    chattingTo.value = contacts.value.find(contact => contact.id === contactId);

  }

  //websocket initialization
  let webSocket: WebSocket

  const webSocketId: Ref<string> = ref('');
  const initializeWebSocket = () => {

    setChatMode(ChatMode.LOADING);

    webSocket = new WebSocket('ws://localhost:3000/chat');

    webSocketId.value = `${authenticatedUser.value.id}-${nanoid()}`;

    webSocketOpen()
  }


  const sendBeforeUnloadMessage = () => {
    webSocketSendUserStoppedTypingMessage({
      fromUser: authenticatedUser.value.id,
      messageType: MessageTypesEnum.USER_STOPPED_TYPING,
      socketId: webSocketId.value,
    })
    webSocketSendConnectionClosedMessage({
      fromUser: authenticatedUser.value.id,
      messageType: MessageTypesEnum.CLOSE_CONNECTION,
      socketId: webSocketId.value,
    })
  }

  const webSocketOpen = () => {
    if (webSocket) {
      addWebSocketOpenedEventLister();
      addWebSocketMessageEventListener();
      addErrorEventListener();
      addCloseEventListener()
      addBeforeUnloadEventListener()
    }
  }

  const addWebSocketOpenedEventLister = () => {
    if (webSocket) {

      webSocket.addEventListener('open', () => {
        webSocketSendConnectionOpenedMessage({
          fromUser: authenticatedUser.value.id,
          messageType: MessageTypesEnum.CONNECTION_OPEN,
          socketId: webSocketId.value,
        })
        setChatMode(ChatMode.CONTACTS)
      })
    }
  }
  const addErrorEventListener = () => {
    if (webSocket) {
      webSocket?.addEventListener('error', webSocketError)
    }
  }

  const addCloseEventListener = () => {
    if (webSocket) {
      webSocket?.addEventListener('close', webSocketClose)
    }
  }


  const addBeforeUnloadEventListener = () => {
    addEventListener('beforeunload', sendBeforeUnloadMessage)
  }

  //websocket initialization


  const addWebSocketMessageEventListener = () => {
    if (webSocket) {
      webSocket.addEventListener('message', (event) => {

        const message = JSON.parse(event.data);
        const messageType = message.messageType;

        switch (messageType) {
          case MessageTypesEnum.NEW_CONNECTION:
            const newConnectionMessage = JSON.parse(event.data) as NewConnectionMessage
            setActiveUsersIndicator(newConnectionMessage.activeUserIds)
            console.log('new connection')
            break;

          case MessageTypesEnum.LOAD_UNSEEN_MESSAGES_NOTIFICATION:
            const loadUnseenMessagesNotificationMessage = JSON.parse(event.data) as LoadUnseenMessagesNotification;
            loadUnseenMessagesNotification(loadUnseenMessagesNotificationMessage)
            console.log('load unseen messages notification')
            console.log(message);
            break;

          case MessageTypesEnum.CONNECTION_CLOSED:
            const connectionClosedMessage = JSON.parse(event.data) as ConnectionClosedMessageReceive;
            setActiveUsersIndicator(connectionClosedMessage.activeUserIds)
            console.log('connection closed')
            break;

          case MessageTypesEnum.LOAD_CHAT:
            console.log('load chat')
            const loadChatMessage = JSON.parse(event.data) as LoadChatMessage
            handleLoadChat(loadChatMessage);
            break;

          case MessageTypesEnum.NEW_MESSAGE:
            const newMessage = JSON.parse(event.data) as NewMessage
            handleNewMessage(newMessage)
            console.log('new message')
            console.log(message);
            break

          case MessageTypesEnum.FAILED_TO_SEND_MESSAGE:
            const failedToSendMessageMessage = JSON.parse(event.data) as FailedToSendMessage
            handleFailedToSendMessage(failedToSendMessageMessage);
            console.log('failed to send message');
            console.log(message)
            break;

          case MessageTypesEnum.FAILED_TO_LOAD_CHAT:
            handleFailedToLoadChat()
            console.log('failed to load chat')
            break;

          case MessageTypesEnum.UPDATE_CLIENT_MESSAGE_ID:
            const updateClientMessageIdMessage = JSON.parse(event.data) as UpdateClientIdMessage
            handleUpdateClientMessageId(updateClientMessageIdMessage)
            console.log('update client message id');
            console.log(message);
            break;

          case MessageTypesEnum.USER_IS_TYPING:
            const userIsTypingMessage = JSON.parse(event.data) as UserIsTypingMessage
            handleUserIsTyping(userIsTypingMessage)
            console.log('user is typing');
            console.log(message);
            break;

          case MessageTypesEnum.USER_STOPPED_TYPING:
            const userStoppedTypingMessage = JSON.parse(event.data) as UserStoppedTypingMessage
            handleUserStoppedTyping(userStoppedTypingMessage)
            console.log('user stopped typing')
            console.log(message);
            break;

          case MessageTypesEnum.UPDATE_SENT_MESSAGES:
            const updateSentMessagesMessage = JSON.parse(event.data) as UpdateSentMessagesMessage
            handleUpdateSentMessages(updateSentMessagesMessage)

            console.log('updated sent messages')
            console.log(message);
            break;

          case MessageTypesEnum.UPDATE_MESSAGE_READ_STATUS:
            const updateMessageReadStatusMessage = JSON.parse(event.data) as UpdateMessageReadStatusIncoming
            handleUpdateMessageReadStatus(updateMessageReadStatusMessage)
            console.log('update message read status')
            console.log(message);
            break;

          case MessageTypesEnum.FAILED_TO_FORWARD_MESSAGE:
            handleFailedToForwardMessages(message)
            break;

          default:
            console.error('UNKNOWN MESSAGE TYPE')

        }
      })
    }
  }

  const setActiveUsersIndicator = (activeUserIds: number[]) => {
    contacts.value.forEach(contact => {
      contact.isOnline = activeUserIds.includes(contact.id);
    })
  }

  const loadUnseenMessagesNotification = (loadUnseenMessagesNotificationMessage: LoadUnseenMessagesNotification) => {
    const unseenMessages = loadUnseenMessagesNotificationMessage.unseenMessages;
    contacts.value.map(contact => {
      const unseenMessageNumber = unseenMessages.find(message => Number(message.message_from_user_id) === contact.id);
      if (unseenMessageNumber) {
        contact.hasUnreadMessages = true
        contact.unreadMessageCount = Number(unseenMessageNumber.unseen_messages_count)
      }
    })
  }

  const scrollToBottomUsed = ref(false);

  const formatMessageType = (messageContentType: string) => {
    // Split the string by ':'
    const [, mimeType] = messageContentType.split(':');

    // Split the mime type by '/'
    const [mainType, subType] = mimeType.split('/');

    return {mainType, subType};
  }
  const loadMoreDisabled = ref(false);
  const handleLoadChat = (loadChatMessage: LoadChatMessage) => {

    const messages = loadChatMessage.messages;

    const gallery = loadChatMessage.gallery;

    const allFiles = loadChatMessage.allFiles;


    const formattedMessages = messages.reverse().map(msg => {
      return {
        id: msg.id,
        fromUser: Number(msg.message_from_user_id),
        toUser: Number(msg.message_to_user_id),
        message: msg.message_content,
        messageTimeStamp: formatMessageTimeStamp(msg.created_at),
        messageSeenAt: msg.message_seen_at ? formatMessageTimeStamp(msg.message_seen_at) : null,
        messageSent: true,
        messageContentType: msg.message_content_type !== 'text' ? formatMessageType(msg.message_content_type) : 'text',
        fileUrl: msg.file_url ?? undefined,
        fileName: msg.file_name ?? undefined,
        forwardMessage: false
      }
    })

    const formattedGallery = gallery.reverse().map(file => {
      return {
        id: file.id,
        fromUser: Number(file.message_from_user_id),
        toUser: Number(file.message_to_user_id),
        messageTimeStamp: formatMessageTimeStamp(file.created_at),
        fileUrl: file.file_url,
        fileName: file.file_name,
        mimeMainType: file.mime_main_type,
        currentlyActiveInCarousel: false
      }
    })

    const formattedAllFiles = allFiles.map(file => {
      return {
        id: file.id,
        fromUser: Number(file.message_from_user_id),
        toUser: Number(file.message_to_user_id),
        messageTimeStamp: formatMessageTimeStamp(file.created_at),
        fileUrl: file.file_url,
        fileName: file.file_name,
        mimeMainType: file.mime_main_type,
        mimeSubType: file.mime_sub_type,
      }
    })
    if (formattedMessages.length != 0) {
      if (chattingTo.value) {

        chattingTo.value.messages.unshift(...formattedMessages);

        if (!scrollToBottomUsed.value) {
          chattingTo.value.gallery.unshift(...formattedGallery)

        }

        authUserStore.gallery = chattingTo.value?.gallery

        authUserStore.allFiles = formattedAllFiles

        if (scrollToBottomUsed.value) {
          scrollAreaRef.value.setScrollPosition('vertical', 1)
        }


      }
    } else {
      loadMoreDisabled.value = true
    }
    setChatMode(ChatMode.CHAT)

  }

  function scrollToBottom() {

    setTimeout(() => {
      scrollAreaRef.value?.setScrollPercentage('vertical', 1, 500)
    }, 50);
  }

  const handleNewMessage = (message: NewMessage) => {


    const messagingUser = contacts.value.find(contact => contact.id === message.fromUser);

    if (messagingUser) {
      messagingUser.messages.push({
        id: message.id,
        fromUser: message.fromUser,
        toUser: message.toUser,
        message: message.message,
        messageTimeStamp: message.messageTimeStamp,
        messageSeenAt: formatMessageTimeStamp(new Date().toISOString()),
        messageSent: true,
        messageContentType: message.message_content_type !== 'text' ? formatMessageType(message.message_content_type) : 'text',
        fileUrl: message.file_url ?? undefined,
        fileName: message.fileName ?? undefined,
        forwardMessage: false
      });

    }

    if (!chattingTo.value) {
      if (messagingUser) {
        messagingUser.hasUnreadMessages = true;
        messagingUser.unreadMessageCount = messagingUser.unreadMessageCount + 1
      }
    } else {
      if (chattingTo.value.id === message.fromUser) {

        if (message.file_url) {
          authUserStore.allFiles.unshift({
            id: message.id,
            fromUser: Number(message.fromUser),
            toUser: Number(message.toUser),
            messageTimeStamp: message.messageTimeStamp,
            fileUrl: message.file_url,
            fileName: message.fileName!,
            mimeMainType: message.mime_main_type!,
            mimeSubType: message.mime_sub_type!,
          })
        }
        if (message.mime_main_type === 'image' || message.mime_main_type === 'video') {

          chattingTo.value.gallery.push({
            id: message.id,
            fromUser: Number(message.fromUser),
            toUser: Number(message.toUser),
            messageTimeStamp: message.messageTimeStamp,
            fileUrl: message.file_url!,
            fileName: message.fileName!,
            mimeMainType: message.mime_main_type,
            currentlyActiveInCarousel: false
          })
        }
        webSocketSendUpdateMessageReadStatus({
          fromUser: authenticatedUser.value.id,
          toUser: chattingTo.value.id,
          messageType: MessageTypesEnum.UPDATE_MESSAGE_READ_STATUS,
          socketId: webSocketId.value,
          message: message.message,
        })

        const scrollPercentage = scrollAreaRef.value?.getScrollPercentage();

        if (scrollPercentage.top >= 0.9) {
          scrollToBottom();
        }

      }
    }
  }

  const handleFailedToSendMessage = (message: FailedToSendMessage) => {
    const messagingUser = contacts.value.find(contact => contact.id === message.toUser);

    if (messagingUser) {
      messagingUser.messages.find(msg => msg.id === message.id)!.messageSent = false
    }
  }

  const handleFailedToLoadChat = () => {
    useNotificationMessage(NotificationType.ERROR, 'Nije uspelo otvaranje chata')
    setChatMode(ChatMode.CONTACTS)
  }

  const handleUpdateClientMessageId = (message: UpdateClientIdMessage) => {
    const messagingUser = contacts.value.find(contact => contact.id === message.toUser);

    if (messagingUser) {
      if (message.serverMessageId != null) {
        //update message id with server message id
        messagingUser.messages.find(msg => msg.id === message.clientMessageId)!.id = message.serverMessageId
      }
      messagingUser.messages.find(msg => msg.id === message.serverMessageId)!.messageSent = true
      messagingUser.messages.find(msg => msg.id === message.serverMessageId)!.messageContentType = message.message_content_type !== 'text' ? formatMessageType(message.message_content_type) : 'text'
      URL.revokeObjectURL(messagingUser.messages.find(msg => msg.id === message.serverMessageId)!.fileUrl!);
      messagingUser.messages.find(msg => msg.id === message.serverMessageId)!.fileUrl = message.file_url
      messagingUser.messages.find(msg => msg.id === message.serverMessageId)!.fileName = message.fileName
      messagingUser.messages.find(msg => msg.id === message.serverMessageId)!.base64WithDataMimeType = undefined

      if (message.file_url) {
        if (message.mime_main_type === 'image' || message.mime_main_type === 'video') {


          authUserStore.gallery.find(msg => msg.id === message.clientMessageId)!.id = message.serverMessageId;
          authUserStore.gallery.find(msg => msg.id === message.serverMessageId)!.fileName = message.fileName!;
          authUserStore.gallery.find(msg => msg.id === message.serverMessageId)!.fileUrl = message.file_url;

        }
        authUserStore.allFiles.find(msg => msg.id === message.clientMessageId)!.id = message.serverMessageId;
        authUserStore.allFiles.find(msg => msg.id === message.serverMessageId)!.fileName = message.fileName!;
        authUserStore.allFiles.find(msg => msg.id === message.serverMessageId)!.fileUrl = message.file_url;
      }

      if (message.isResent) {
        const messageIndex = messagingUser.messages.findIndex(msg => msg.id === message.serverMessageId);
        const messageToRelocate = messagingUser.messages.find(msg => msg.id === message.serverMessageId)
        messagingUser.messages.splice(messageIndex, 1);
        messagingUser.messages.push(messageToRelocate!);


      }


    }
  }

  const handleUserIsTyping = (message: UserIsTypingMessage) => {
    if (chattingTo.value) {
      if (chattingTo.value.id === message.fromUser) {
        chattingTo.value.isTyping = true;

        const scrollPercentage = scrollAreaRef.value?.getScrollPercentage();

        if (scrollPercentage.top >= 0.9) {
          scrollToBottom();
        }


      }
    }
  }

  const handleUserStoppedTyping = (message: UserStoppedTypingMessage) => {
    if (chattingTo.value) {
      if (chattingTo.value.id === message.fromUser) {
        chattingTo.value.isTyping = false;
      }
    }
  }

  const handleUpdateSentMessages = (message: UpdateSentMessagesMessage) => {
    const messagingUser = contacts.value.find(contact => contact.id === message.toUser);

    console.log(messagingUser);
    if (messagingUser) {
      messagingUser.messages.push({
        id: message.id,
        fromUser: message.fromUser,
        toUser: message.toUser,
        message: message.message,
        messageTimeStamp: message.messageTimeStamp,
        messageSeenAt: message.messageSeenAt ? formatMessageTimeStamp(message.messageSeenAt) : null,
        messageSent: true,
        messageContentType: message.message_content_type !== 'text' ? formatMessageType(message.message_content_type) : 'text',
        fileUrl: message.file_url,
        fileName: message.fileName,
        forwardMessage: false
      });
    }

    if (chattingTo.value && chattingTo.value.id === message.toUser) {
      if (message.file_url) {
        authUserStore.allFiles.unshift({
          id: message.id,
          fromUser: Number(message.fromUser),
          toUser: Number(message.toUser),
          messageTimeStamp: message.messageTimeStamp,
          fileUrl: message.file_url,
          fileName: message.fileName!,
          mimeMainType: message.mime_main_type!,
          mimeSubType: message.mime_sub_type!,
        })
      }

      if (message.mime_main_type === 'image' || message.mime_main_type === 'video') {

        chattingTo.value.gallery.push({
          id: message.id,
          fromUser: Number(message.fromUser),
          toUser: Number(message.toUser),
          messageTimeStamp: formatMessageTimeStamp(message.messageTimeStamp),
          fileUrl: message.file_url!,
          fileName: message.fileName!,
          mimeMainType: message.mime_main_type,
          currentlyActiveInCarousel: false
        })
      }
    }
  }

  const handleUpdateMessageReadStatus = (message: UpdateMessageReadStatusIncoming) => {
    console.log('UPDATE MESSAGE READ STATUS');
    contacts.value.find(contact => contact.id === message.toUser)!.hasUnreadMessages = false;
    contacts.value.find(contact => contact.id === message.toUser)!.unreadMessageCount = 0;

    console.log(message);
    if (chattingTo.value) {
      if (chattingTo.value.id === message.fromUser) {
        chattingTo.value.messages.map(msg => {
          if (!msg.messageSeenAt) {
            msg.messageSeenAt = formatMessageTimeStamp(message.messageSeenAt)
          }
          return msg;
        })
        console.log(chattingTo.value)
      }
    }
  }

  const handleFailedToForwardMessages = (message: Message) => {
    const contact = authUserStore.contacts.find(contact => contact.id === message.toUser);

    useNotificationMessage(NotificationType.STICKY_ERROR, `Korisniku ${contact!.name} ${contact!.surname} nisu prosleđene poruke!`)
  }
  const webSocketSendMessage = (message: SocketMessage) => {
    if (webSocket) {
      console.log(message);
      webSocket.send(JSON.stringify(message));
    }
  }

  const webSocketSendConnectionOpenedMessage = (message: ConnectionOpenedMessage) => {
    if (webSocket) {
      webSocket.send(JSON.stringify(message));
    }
  }

  const webSocketSendConnectionClosedMessage = (message: ConnectionClosedMessageSend) => {
    if (webSocket) {
      webSocket.send(JSON.stringify(message));
    }
  }

  const webSocketSendUserStoppedTypingMessage = (message: UserStoppedTypingMessage) => {
    if (webSocket) {
      webSocket.send(JSON.stringify(message));
    }
  }

  const webSocketSendUpdateMessageReadStatus = (message: UpdateMessageReadStatus) => {
    if (webSocket) {
      webSocket.send(JSON.stringify(message));
    }
  }
  const webSocketError = () => {
    setChatMode(ChatMode.ERROR)
  }

  const webSocketClose = () => {
    setChatMode(ChatMode.ERROR)
  }

  const setChatMode = (newChatMode: ChatMode) => {
    //loadMoreDisabled.value = false;
    chatMode.value = newChatMode
  }

  function formatMessageTimeStamp(timestamp: string) {
    // Parse and convert the timestamp to Europe/Belgrade timezone
    const belgradeTime = moment.tz(timestamp, "Europe/Belgrade");

// Format the date and time
    const optionsDate = {weekday: 'long', day: '2-digit', month: 'short', year: 'numeric', timeZone: 'Europe/Belgrade'};
    const optionsTime = {hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/Belgrade'};

// Get formatted date and time strings
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const formattedDate = new Intl.DateTimeFormat('sr-Latn', optionsDate).format(belgradeTime.toDate());
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const formattedTime = new Intl.DateTimeFormat('sr-Latn', optionsTime).format(belgradeTime.toDate());

// Combine the formatted strings
    return `${formattedDate}\n${formattedTime}`;
  }

  const resendFailedMessage = (id: string) => {
    const currentTimeStamp = new Date().toISOString();

    const messagingUser = contacts.value.find(contact => contact.id === chattingTo.value!.id);

    const resendMessageValue = messagingUser!.messages.find(msg => msg.id === id)

    const urlRegex = /\b(?:[a-z0-9-]+\.)+[a-z]{2,}\b(?:\/\S*)?/gi;

    console.log(resendMessageValue);
    if (!resendMessageValue!.fileName) {
      webSocketSendMessage({
        fromUser: authenticatedUser.value.id,
        toUser: chattingTo.value!.id,
        messageId: id,
        message: resendMessageValue!.message.replace(/\n/g, '<br>').replace(urlRegex, '<a href="http://$&" target="_blank">$&</a>'),
        messageTimeStamp: formatMessageTimeStamp(currentTimeStamp),
        messageType: MessageTypesEnum.SEND_MESSAGE,
        socketId: webSocketId.value,
        offset: undefined,
        isResent: true
      })
    } else {
      webSocketSendMessage({
        fromUser: authenticatedUser.value.id,
        toUser: chattingTo.value!.id,
        messageId: id,
        message: resendMessageValue!.base64WithDataMimeType,
        messageContentType: 'file',
        fileName: resendMessageValue!.fileName,
        // fileUrl: tempUrl,
        // fileName: fileName,
        // base64WithDataMimeType: value
        messageTimeStamp: formatMessageTimeStamp(currentTimeStamp),
        messageType: MessageTypesEnum.SEND_MESSAGE,
        socketId: webSocketId.value,
        offset: undefined,
        isResent: true
      })
    }

  }


  const sendNewMessage = () => {
    if (!message.value || message.value === '') {
      return;
    }
    const urlRegex = /\b(?:[a-z0-9-]+\.)+[a-z]{2,}\b(?:\/\S*)?/gi;

    const currentTimeStamp = new Date().toISOString();
    const messageId = `${Date.now()}-${nanoid()}`

    const messageToSend = {
      fromUser: authenticatedUser.value.id,
      toUser: chattingTo.value!.id,
      messageId: messageId,
      message: message.value.replace(/\n/g, '<br>').replace(urlRegex, '<a href="http://$&" target="_blank">$&</a>'),
      messageTimeStamp: formatMessageTimeStamp(currentTimeStamp),
      messageType: MessageTypesEnum.SEND_MESSAGE,
      socketId: webSocketId.value,
      offset: undefined
    }
    webSocketSendMessage(messageToSend)

    if (chattingTo.value && chattingTo.value.id !== authenticatedUser.value.id) {
      chattingTo.value.messages.push({
        fromUser: authenticatedUser.value.id,
        toUser: chattingTo.value!.id,
        id: messageId,
        message: message.value.replace(/\n/g, '<br>').replace(urlRegex, '<a href="http://$&" target="_blank">$&</a>'),
        messageTimeStamp: formatMessageTimeStamp(currentTimeStamp),
        messageSeenAt: null,
        messageSent: true,
        forwardMessage: false,
        messageContentType: 'text'
      })
    }
    message.value = '';
    inputRef.value.focus();
    scrollToBottom()
  }


  function createTemporaryUrl(base64String: string, fileType: string) {
    // Decode the base64 string
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Create a Blob from the byte array
    const blob = new Blob([byteArray], {type: fileType});

    // Create a temporary URL for the Blob
    return URL.createObjectURL(blob);
  }

  const sendFile = async () => {


    const currentTimeStamp = new Date().toISOString();
    const messageId = `${Date.now()}-${nanoid()}`


    const fileName = message.value.name.slice(0, 30);
    const {base64} = await useBase64(message.value)

    watch(base64, (value) => {
      if (value) {

        const [metaData, base64String] = value.split(',');


        const [mimeTypeDetected] = metaData.split(';');

        const mimeTypeObject = formatMessageType(mimeTypeDetected);


        const tempUrl = createTemporaryUrl(base64String, `${mimeTypeObject.mainType}/${mimeTypeObject.subType}`)


        const messageToSend = {
          fromUser: authenticatedUser.value.id,
          toUser: chattingTo.value!.id,
          messageId: messageId,
          message: value,
          messageContentType: 'file',
          fileName: fileName,
          messageTimeStamp: formatMessageTimeStamp(currentTimeStamp),
          messageType: MessageTypesEnum.SEND_MESSAGE,
          socketId: webSocketId.value,
          offset: undefined
        }
        webSocketSendMessage(messageToSend)

        if (chattingTo.value) {
          chattingTo.value.messages.push({
            fromUser: authenticatedUser.value.id,
            toUser: chattingTo.value!.id,
            id: messageId,
            message: message.value,
            messageTimeStamp: formatMessageTimeStamp(currentTimeStamp),
            messageSeenAt: null,
            messageSent: true,
            messageContentType: mimeTypeObject,
            fileUrl: tempUrl,
            fileName: fileName,
            base64WithDataMimeType: value,
            forwardMessage: false
          })

          if (mimeTypeObject.mainType === 'image' || mimeTypeObject.mainType === 'video') {
            authUserStore.gallery.push({
              id: messageId,
              fromUser: Number(authenticatedUser.value.id),
              toUser: Number(chattingTo.value!.id),
              messageTimeStamp: formatMessageTimeStamp(currentTimeStamp),
              fileUrl: tempUrl,
              fileName: fileName,
              mimeMainType: mimeTypeObject.mainType,
              currentlyActiveInCarousel: false,
            });
          }

          authUserStore.allFiles.unshift({
            id: messageId,
            fromUser: Number(authenticatedUser.value.id),
            toUser: Number(chattingTo.value!.id),
            messageTimeStamp: formatMessageTimeStamp(currentTimeStamp),
            fileUrl: tempUrl,
            fileName: fileName,
            mimeMainType: mimeTypeObject.mainType,
            mimeSubType: mimeTypeObject.subType,
          })

        }
      }
      message.value = '';
      inputRef.value.focus();
      scrollToBottom()
    })
  }

  const toggleChatWindow = (contactId: number, reload = false) => {
    loadMoreDisabled.value = false;
    contacts.value.find(contact => contact.id === contactId)!.messages = [];
    contacts.value.find(contact => contact.id === contactId)!.gallery = [];
    scrollToBottomUsed.value = false;
    initialScroll.value = true;
    authUserStore.gallery = [];
    authUserStore.allFiles = [];
    if (!reload) {

      if (chatMode.value === 'chat') {

        chatMode.value = 'contacts';
        chattingTo.value = undefined

        return
      }

    }
    // chatMode.value = 'chat';
    contacts.value.find(contact => contact.id === contactId)!.hasUnreadMessages = false;
    contacts.value.find(contact => contact.id === contactId)!.unreadMessageCount = 0;

    setChattingTo(contactId)
    // chattingTo.value = contacts.value.find(contact => contact.id === contactId);

    webSocketSendMessage({
      fromUser: authenticatedUser.value.id,
      toUser: chattingTo.value!.id,
      message: message.value,
      messageType: MessageTypesEnum.LOAD_CHAT,
      socketId: webSocketId.value,
      offset: 0
    })

    webSocketSendMessage({
      fromUser: authenticatedUser.value.id,
      toUser: chattingTo.value!.id,
      message: message.value,
      messageType: MessageTypesEnum.UPDATE_MESSAGE_READ_STATUS,
      socketId: webSocketId.value,
      offset: undefined
    })

    // scrollToBottom();

  }

  watch(message, (newValue) => {
    if (chattingTo.value && newValue) {
      webSocketSendMessage({
        fromUser: authenticatedUser.value.id,
        toUser: chattingTo.value?.id,
        message: message.value,
        messageType: MessageTypesEnum.USER_IS_TYPING,
        socketId: webSocketId.value,
        offset: undefined
      })
    }
    if (!chattingTo.value || !newValue) {
      webSocketSendMessage({
        fromUser: authenticatedUser.value.id,
        toUser: undefined,
        message: undefined,
        messageType: MessageTypesEnum.USER_STOPPED_TYPING,
        socketId: webSocketId.value,
        offset: undefined
      })
    }
  })

  const initialScroll = ref(true);

  async function onScroll(index: number, done: () => void) {


    webSocketSendMessage({
      fromUser: authenticatedUser.value.id,
      toUser: chattingTo.value!.id,
      message: message.value,
      messageType: MessageTypesEnum.LOAD_CHAT,
      socketId: webSocketId.value,
      offset: chattingTo.value!.messages.length,
    })


    const scrollPercentage = scrollAreaRef.value?.getScrollPercentage();

    showScrollToBottomButton.value = scrollPercentage.top <= 0.9;

    done();
  }

  function handleEvent(event: KeyboardEvent) {

    if ((event.ctrlKey && event.key === 'Enter') || (event.shiftKey && event.key === 'Enter')) {
      event.preventDefault();
      message.value = message.value + '\n';


    } else if (event.key === 'Enter') {
      event.preventDefault();
      sendNewMessage()
    }
  }


  function forwardMessages(contactIds: string[], messageIds: string[]) {
    contactIds.forEach(contactId => {
      webSocket.send(JSON.stringify({
        fromUser: authenticatedUser.value.id,
        toUser: contactId,
        messageIds: messageIds,
        socketId: webSocketId.value,
        messageType: MessageTypesEnum.FORWARD_MESSAGES,
        messageTimeStamp: formatMessageTimeStamp(new Date().toISOString()),
      }))
    })

  }


  //drop files to send
  const dropZoneRef = ref<HTMLDivElement>()

  function onDrop(files: File[] | null) {
    if (files!.length > 10) {
      useNotificationMessage(NotificationType.STICKY_ERROR, `Možete poslati maksimalno 10 fajlova odjednom!`)
      showDropFilesHere.value = false
      return;
    }
    for (let i = 0; i < files!.length; i++) {
      if (files![i].size > 25000000) {
        useNotificationMessage(NotificationType.STICKY_ERROR, `Fajl ${files![i].name} ima više od 25 megabajta!`)
      } else if (files![i].name.length > 30) {
        useNotificationMessage(NotificationType.STICKY_ERROR, `Fajl ${files![i].name} ima više od 30 karaktera u nazivu!`)
      } else {
        message.value = files![i];
        sendFile()
      }

    }
    showDropFilesHere.value = false
    // called when files are dropped on zone
  }


  const showDropFilesHere = ref(false);

  useDropZone(dropZoneRef, {
    onDrop,
    onOver: () => showDropFilesHere.value = true,
    onLeave: () => showDropFilesHere.value = false,
  })

  //drop files to send

  //gallery

  const gallery = computed(() => {
    return authUserStore.getGallery
  })


  const galleryOpened = ref(false);
  const slide: Ref<null | string> = ref(null);

  const galleryCarousel = ref();

  const currentlyActiveGalleryItem = computed(function () {
    return authUserStore.getCurrentlyActiveGalleryItem
  })
  const galleryController = (ev: KeyboardEvent) => {
    if (ev.key === 'ArrowLeft') {
      const newActiveId = authUserStore.getNewMediaActiveInCarousel('ArrowLeft');
      console.log('idem levo');
      console.log(newActiveId);
      if (newActiveId) {
        authUserStore.setMediaActiveInCarousel(newActiveId)
        slide.value = newActiveId
      }
    } else if (ev.key === 'ArrowRight') {
      const newActiveId = authUserStore.getNewMediaActiveInCarousel('ArrowRight');
      console.log('idem desno');
      console.log(newActiveId);
      if (newActiveId) {
        authUserStore.setMediaActiveInCarousel(newActiveId)
        slide.value = newActiveId
      }
    }
  }
  const openGallery = (messageId: string) => {
    authUserStore.setMediaActiveInCarousel(messageId)

    addEventListener('keydown', galleryController)

    slide.value = gallery.value.find(file => file.id === messageId)!.id

    galleryOpened.value = true;

  }

  const downloadFileFromAllFiles = (fileUrl: string, fileName: string) => {
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error downloading image:', error));

  }
  const downloadFileFromGallery = () => {


    fetch(currentlyActiveGalleryItem.value!.fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = currentlyActiveGalleryItem.value!.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error downloading image:', error));


  }

  const openFileFromGalleryInNewTab = () => {


    const link = document.createElement('a');
    link.href = currentlyActiveGalleryItem.value!.fileUrl;
    link.target = '_blank'
    link.download = currentlyActiveGalleryItem.value!.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  //gallery


//file viewer

  const fileViewerShown = ref(false);
  const maximizedToggle = ref(true);
  const toggleFileViewer = () => {
    fileViewerShown.value = !fileViewerShown.value;
  }

  const filterTable = ref('');

  const fileTypes = ['video', 'image', 'application', 'text'];
  const columns = [
    {name: 'fileName', align: 'center', label: 'Fajl', field: 'fileName'},
    {name: 'details', align: 'center', label: 'Detalji', field: 'details', sortable: true},
  ]

  const rows = computed(() => {
    return authUserStore.getAllFiles
  })


  const showImages = ref(true);
  const showFiles = ref(true);
  const showVideos = ref(true);
  const showText = ref(true);

  watch(showImages, (shouldShowImages, oldValue, onCleanup) => {
    if (shouldShowImages) {
      fileTypes.push('image')
    } else {
      const fileTypeToFilterOutIndex = fileTypes.findIndex(file => file === 'image')
      fileTypes.splice(fileTypeToFilterOutIndex, 1);
    }
  })

  watch(showFiles, (shouldShowFiles, oldValue, onCleanup) => {
    if (shouldShowFiles) {
      fileTypes.push('application')
    } else {
      const fileTypeToFilterOutIndex = fileTypes.findIndex(file => file === 'application')
      fileTypes.splice(fileTypeToFilterOutIndex, 1);
    }
  })

  watch(showVideos, (shouldShowVideos, oldValue, onCleanup) => {
    if (shouldShowVideos) {
      fileTypes.push('video')
    } else {
      const fileTypeToFilterOutIndex = fileTypes.findIndex(file => file === 'video')
      fileTypes.splice(fileTypeToFilterOutIndex, 1);
    }
  })

  watch(showText, (shouldShowText, oldValue, onCleanup) => {
    if (shouldShowText) {
      fileTypes.push('text')
    } else {
      const fileTypeToFilterOutIndex = fileTypes.findIndex(file => file === 'text')
      fileTypes.splice(fileTypeToFilterOutIndex, 1);
    }
  })
  //file viewer

  //copy message
  const copyMessageToClipboard = (message: string) => {
    copyToClipboard(message.replace(/<br\s*\/?>/gi, '\n').replace(/<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/gi, '$2'));
    useNotificationMessage(NotificationType.SUCCESS, 'Uspešno kopirana poruka')
  }
  //copy message

  //forward messages
  const messagesToForward: Ref<string[]> = ref([]);

  const forwardMessagesMode = ref(false);

  const forwardSelectedMessages = (shouldSendMessages = false) => {
    if (!shouldSendMessages) {
      selectContactsForMessageForwarding.value = true;

      return;
    }

    messagesToForward.value.sort((a: string, b: string) => Number(a) - Number(b))

    if (forwardMessageTo.value.length === 0) {
      useNotificationMessage(NotificationType.ERROR, 'Morate izabrati barem jedan kontakt');
      return
    }

    forwardMessages(forwardMessageTo.value, messagesToForward.value)

    forwardMessagesMode.value = false

    authUserStore.unsetMessagesToForward(chattingTo.value!.id, messagesToForward.value)

    messagesToForward.value = [];

    selectContactsForMessageForwarding.value = false

    forwardMessageTo.value = [];

  }
  const setMessageToForward = (messageId: string, isInitial: boolean) => {
    if (!isInitial && !forwardMessagesMode.value) {
      return;
    }
    forwardMessagesMode.value = true;

    const message = authUserStore.setMessageForForwarding(messageId, chattingTo.value!.id);

    if (message!.forwardMessage) {
      messagesToForward.value.push(message!.id)
    } else {
      const idToRemove = messagesToForward.value.findIndex(msg => msg === messageId);
      messagesToForward.value.splice(idToRemove, 1);
    }

    if (authUserStore.countMessagesToForward(chattingTo.value!.id) === 0) {
      forwardMessagesMode.value = false
    }

  }
  const escapeForwardMessages = (ev: KeyboardEvent) => {
    if (ev.code === 'Escape') {
      forwardMessagesMode.value = false

      authUserStore.unsetMessagesToForward(chattingTo.value!.id, messagesToForward.value)

      messagesToForward.value = [];

    }
  }

  watch(forwardMessagesMode, (value, oldValue, onCleanup) => {
    if (value) {
      addEventListener('keydown', escapeForwardMessages)
    } else {
      removeEventListener('keydown', escapeForwardMessages)
    }
    console.log(value);
  })

  const selectContactsForMessageForwarding = ref(false);

  const forwardMessageTo = ref([]);

  const forwardMessageColumns = [
    {name: 'icon', align: 'left', label: '', field: 'icon'},
    {name: 'name', align: 'left', label: 'Korisnik', field: (row: any) => `${row.name} ${row.surname}`, sortable: true},
    {name: 'selected', align: 'left', label: 'Izaberi', field: 'selected',},
  ]

  const filterForwardMessageTable = ref('');
  //forward messages
  return {
    initializeWebSocket,
    sendBeforeUnloadMessage,
    webSocketSendMessage,
    scrollToBottom,
    setChattingTo,
    resendFailedMessage,
    sendNewMessage,
    toggleChatWindow,
    onScroll,
    handleEvent,
    sendFile,
    onDrop,
    openGallery,
    downloadFileFromAllFiles,
    downloadFileFromGallery,
    openFileFromGalleryInNewTab,
    toggleFileViewer,
    copyMessageToClipboard,
    forwardSelectedMessages,
    setMessageToForward,
    showScrollToBottomButton,
    chatMode,
    chattingTo,
    contacts,
    webSocketId,
    message,
    scrollAreaRef,
    inputRef,
    loadMoreDisabled,
    dropZoneRef,
    showDropFilesHere,
    gallery,
    galleryOpened,
    slide,
    galleryCarousel,
    currentlyActiveGalleryItem,
    fileViewerShown,
    maximizedToggle,
    filterTable,
    columns,
    rows,
    showImages,
    showFiles,
    showVideos,
    showText,
    fileTypes,
    forwardMessagesMode,
    selectContactsForMessageForwarding,
    forwardMessageTo,
    filterForwardMessageTable,
    forwardMessageColumns,
    icon
  }
}
