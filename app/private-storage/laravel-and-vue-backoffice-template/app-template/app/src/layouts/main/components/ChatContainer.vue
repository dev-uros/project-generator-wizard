<script setup lang="ts">
import BaseTooltip from "src/modules/shared/components/BaseTooltip.vue";
import useChat from "layouts/main/composables/chat";
import {useAuthStore} from "src/modules/auth/store";
import {computed, ComputedRef} from "vue";
import {User} from "src/modules/administration/users/types";
const authUserStore = useAuthStore();
const authenticatedUser: ComputedRef<User> = computed(function () {
  return authUserStore.getUser
})
const {
  initializeWebSocket,
  sendBeforeUnloadMessage,
  resendFailedMessage,
  sendNewMessage,
  toggleChatWindow,
  scrollToBottom,
  onScroll,
  handleEvent,
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
} = useChat();

defineExpose({
  sendBeforeUnloadMessage
})
initializeWebSocket();

console.log('tu sam');
const thumbStyle = {
  right: '4px',
  borderRadius: '5px',
  backgroundColor: '#027be3',
  width: '5px',
  opacity: 0.75
}

const barStyle = {
  right: '2px',
  borderRadius: '9px',
  backgroundColor: '#027be3',
  width: '9px',
  opacity: 0.2
}
</script>

<template>
    <q-list v-if="chatMode === 'contacts'" bordered class="right-drawer-chat-users">
      <q-scroll-area
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="height:100%;">
        <q-item v-for="contact in contacts" :key="contact.id" style="margin-right: 5px" clickable v-ripple
                @click="toggleChatWindow(contact.id)">
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              <q-badge color="red" floating v-if="contact.hasUnreadMessages"> {{ contact.unreadMessageCount }}
              </q-badge>
              {{ contact.letter }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ contact.name }} {{ contact.surname }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" :color="contact.isOnline ? 'green' : 'red'"/>
          </q-item-section>
        </q-item>
      </q-scroll-area>

    </q-list>
    <div v-else-if="chatMode === 'loading'" class="flex items-center justify-center" style="height: 100%">
      <q-inner-loading
        :showing="chatMode === 'loading'"
        label="Please wait..."
        label-class="text-teal"
        label-style="font-size: 1.1em"
      />
      <q-btn label="Ucitavam se" icon="sync" @click="initializeWebSocket"/>
    </div>
    <div v-else-if="chatMode === 'error'" class="flex items-center justify-center" style="height: 100%">
      <q-btn label="Ponovo se konektuj na chat" icon="sync" @click="initializeWebSocket"/>
    </div>
    <div v-else class="right-drawer-chat">
      <q-banner dense class="text-white bg-blue-grey-9">
        <template v-slot:avatar>

          <q-btn flat icon="arrow_left" round @click="toggleChatWindow(chattingTo.id)" size="sm"></q-btn>

        </template>
        <div class="row">
          <div class="col-3 text-center bg-red-5 ">
            {{ chattingTo.name.toUpperCase() }}
          </div>
          <div class="col-3 text-left">
            <q-btn icon="info" flat size="sm" round color="secondary" @click="toggleFileViewer"/>
          </div>
          <div class="col-6 text-right">
            <q-btn icon="arrow_downward" size="xs" outline class="text-right" v-show="showScrollToBottomButton"
                   @click="scrollToBottom" round/>
          </div>

        </div>

      </q-banner>
      <q-card-section class="chat-messages bg-blue-grey-4 no-padding" ref="dropZoneRef">
        <q-inner-loading
          :showing="showDropFilesHere"
          label="Please wait..."
          label-class="text-teal"
          label-style="font-size: 1.1em"
          style="z-index: 1; border: 10px solid #1976D2; ">
          <q-avatar icon="upload_file" size="100px" color="primary"/>
          <p class="text-h3 text-center">Prevucite fajl za slanje</p>
        </q-inner-loading>
        <q-scroll-area
          ref="scrollAreaRef"
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          style="height:100%;"
        >

          <div class="q-pa-md">

            <q-infinite-scroll @load="onScroll" reverse :disable="loadMoreDisabled" :offset="2000">
              <template v-slot:loading>
                <div class="row justify-center q-my-md">
                  <q-spinner color="primary" name="dots" size="40px"/>
                </div>
              </template>

              <q-chat-message v-memo="[message.id, message.forwardMessage]"
                              v-for="(message, index) in chattingTo.messages"
                              :key="message.id"
                              :sent="message.fromUser === authenticatedUser.id"
                              :name="chattingTo.messages[index].fromUser === chattingTo.messages[index - 1]?.fromUser ? '' :
                              message.fromUser === authenticatedUser.id ? authenticatedUser.name : chattingTo.name"
                              :bg-color="message.forwardMessage ? 'positive' :
                                ( message.fromUser === authenticatedUser.id ? 'white' : 'green-4')"
                              @click="setMessageToForward(message.id, false)">


                <div v-if="message.fileUrl">
                  <div v-if="message.messageContentType.mainType === 'image'" @click="openGallery(message.id)">
                    <q-img :src="message.fileUrl" alt="prcko"/>
                  </div>
                  <div v-else-if="message.messageContentType.mainType === 'video'">
                    <video width="250" height="150" controls>
                      <source :src="message.fileUrl">
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div v-else-if="message.messageContentType.subType === 'pdf'">
                    <q-card class="my-card">
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar>
                            <q-btn icon="description" color="red" target="_blank" :href="message.fileUrl" dense/>
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          {{ message.fileName }}
                        </q-item-section>

                      </q-item>
                    </q-card>

                  </div>
                  <div v-else-if="message.messageContentType.subType === 'msword'">
                    <q-card>
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar>
                            <q-btn icon="description" color="blue" target="_blank" :href="message.fileUrl" dense/>
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          {{ message.fileName }}
                        </q-item-section>

                      </q-item>
                    </q-card>

                  </div>
                  <div
                    v-else-if="message.messageContentType.subType === 'vnd.openxmlformats-officedocument.wordprocessingml.document'">
                    <q-card>
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar>
                            <q-btn icon="description" color="blue" target="_blank" :href="message.fileUrl" dense/>
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          {{ message.fileName }}
                        </q-item-section>

                      </q-item>
                    </q-card>

                  </div>
                  <div
                    v-else-if="message.messageContentType.subType === 'vnd.openxmlformats-officedocument.spreadsheetml.sheet'">
                    <q-card>
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar>
                            <q-btn icon="description" color="green" target="_blank" :href="message.fileUrl" dense/>
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          {{ message.fileName }}
                        </q-item-section>

                      </q-item>
                    </q-card>

                  </div>
                  <div v-else-if="message.messageContentType.subType === 'vnd.ms-excel'">
                    <q-card>
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar>
                            <q-btn icon="description" color="green" target="_blank" :href="message.fileUrl" dense/>
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          {{ message.fileName }}
                        </q-item-section>

                      </q-item>
                    </q-card>

                  </div>
                  <div v-else-if="message.messageContentType.subType === 'csv'">
                    <q-card>
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar>
                            <q-btn icon="description" color="orange" target="_blank" :href="message.fileUrl" dense/>
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          {{ message.fileName }}
                        </q-item-section>

                      </q-item>
                    </q-card>

                  </div>
                  <div v-else-if="message.messageContentType.subType === 'plain'">
                    <q-card>
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar>
                            <q-btn icon="description" color="grey" target="_blank" :href="message.fileUrl" dense/>
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          {{ message.fileName }}
                        </q-item-section>

                      </q-item>
                    </q-card>

                  </div>

                  <div v-else>
                    <q-card>
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar>
                            <q-btn icon="description" color="grey" target="_blank" :href="message.fileUrl" dense/>
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          {{ message.fileName }}
                        </q-item-section>

                      </q-item>
                    </q-card>
                  </div>
                </div>
                <div v-else v-html="message.message">

                </div>

                <template v-slot:stamp>
                  <span v-html="message.messageTimeStamp"></span>
                  <q-badge color="transparent" class="q-ml-md" text-color="black"
                           v-if="message.fromUser === authenticatedUser.id">

                    <q-icon
                      v-if="message.messageSent"
                      :color="message.messageSeenAt ? 'blue' : 'grey'"
                      name="done_all"
                      size="14px"
                      class="q-ml-xs"
                    />
                    <q-icon
                      style="cursor: pointer"
                      v-else
                      :color="icon === 'sync' ? 'primary' : 'negative'"
                      :name="icon"
                      size="20px"
                      class="q-ml-xs"
                      @mouseenter="icon = 'sync'"
                      @mouseleave="icon = 'highlight_off'"
                      @click="resendFailedMessage(message.id)"
                    />
                    <BaseTooltip v-if="!message.messageSent" tooltip="Ponovo pošalji poruku"/>
                    <BaseTooltip v-if="message.messageSeenAt" :tooltip="message.messageSeenAt"/>
                  </q-badge>
                  <q-icon name="expand_more" v-if="!forwardMessagesMode">
                    <q-menu>
                      <q-list style="min-width: 100px">
                        <q-item clickable v-close-popup v-if="!message.fileUrl" dense>
                          <q-item-section side>
                            <q-icon size="xs" name="content_copy"/>
                          </q-item-section>
                          <q-item-section @click="copyMessageToClipboard(message.message)">Kopiraj</q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item clickable v-close-popup dense>
                          <q-item-section side>
                            <q-icon size="xs" name="forward"/>
                          </q-item-section>

                          <q-item-section @click="setMessageToForward(message.id, true)">
                            Prosledi
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-icon>

                </template>

              </q-chat-message>
              <q-chat-message
                v-if="chattingTo.isTyping"
              >
                <q-spinner-dots size="2rem"/>
              </q-chat-message>
            </q-infinite-scroll>


          </div>

        </q-scroll-area>

      </q-card-section>

      <div>

        <q-form @submit="sendNewMessage">
          <div style="display: flex;">
            <q-input
              v-show="!forwardMessagesMode"
              v-model.trim="message"
              dense
              outlined
              autofocus
              style="flex-basis: 90%; max-height: 150px; overflow-y: auto"
              ref="inputRef"
              autogrow
              v-scroll
              @keydown="handleEvent"
            >
            </q-input>

            <q-btn style="align-self: center" dense icon="send" flat round type="submit" color="green"
                   v-show="!forwardMessagesMode"></q-btn>
            <q-btn class="full-width" square dense icon="forward" color="green"
                   v-show="forwardMessagesMode" @click="forwardSelectedMessages(false)">
              <BaseTooltip tooltip="Prosledi izabrane poruke"/>
            </q-btn>

          </div>
        </q-form>
      </div>

    </div>


    <q-dialog v-model="galleryOpened" persistent>
      <q-card>
        <q-bar>
          <q-icon name="file_download" @click="downloadFileFromGallery" style="cursor: pointer">
            <BaseTooltip tooltip="Preuzmi fajl"/>
          </q-icon>
          <q-icon name="launch" @click="openFileFromGalleryInNewTab" style="cursor: pointer">
            <BaseTooltip tooltip="Otvori fajl u novom prozoru"/>
          </q-icon>

          <q-space/>
          <div>{{ currentlyActiveGalleryItem.fileName }}</div>

          <q-space/>

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Zatvori</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="q-pa-md">
            <q-carousel
              animated
              v-model="slide"
              infinite
              class="full-height full-width"
              control-color="blue"
              padding
              ref="galleryCarousel"
            >
              <q-carousel-slide v-for="file in gallery" :key="file.id" :name="file.id" class="flex flex-center">
                <q-img v-if="file.mimeMainType === 'image'" :src="file.fileUrl" fit="scale-down" width="1000px"
                       height="600px" style="background-color: transparent"/>
                <video v-else controls width="480" height="600" style="background-color: transparent">
                  <source :src="file.fileUrl">
                  Your browser does not support the video tag.
                </video>
                <div>
                  <p class="text-caption wrap">{{ file.messageTimeStamp }}</p>
                </div>
              </q-carousel-slide>

            </q-carousel>
          </div>
        </q-card-section>

      </q-card>
    </q-dialog>

    <q-dialog
      v-model="fileViewerShown"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space/>

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>

        </q-card-section>
        <q-card-section>
          <q-table :rows="rows" :columns="columns" row-key="name" :filter="filterTable"
                   style="max-width: 1000px; margin: 0 auto; height: 800px"
                   :rows-per-page-options="[0]"
                   virtual-scroll
                   class="my-sticky-virtscroll-table">
            <template #top-left>
              <q-toggle
                v-model="showImages"
                color="green"
                icon="image"
                label="Slika"
                left-label
              />
              <q-toggle
                v-model="showVideos"
                color="green"
                label="Video"
                icon="videocam"
                left-label
              />
              <q-toggle
                v-model="showFiles"
                color="green"
                label="Fajl"
                icon="folder"
                left-label
              />
              <q-toggle
                v-model="showText"
                color="green"
                label="Tekst"
                icon="text_snippet"
                left-label
              />
            </template>
            <template v-slot:top-right>
              <q-input
                borderless
                dense
                debounce="300"
                placeholder="Pretraga"
                v-model="filterTable"
              >
                <template v-slot:append>
                  <q-icon name="search"/>
                </template>
              </q-input>
            </template>
            <template v-slot:header="props">
              <q-tr :props="props" class="bg-primary text-white">
                <q-th
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                >
                  {{ col.label }}
                </q-th>
              </q-tr>
            </template>


            <template v-slot:body="props">
              <q-tr :props="props" v-show="fileTypes.includes(props.row.mimeMainType)">
                <q-td :props="props" key="fileName"
                      @click="downloadFileFromAllFiles(props.row.fileUrl, props.row.fileName)" style="cursor: pointer">
                  <q-item v-if="props.row.mimeMainType === 'image'">
                    <q-item-section avatar>
                      <q-avatar>
                        <img :src="props.row.fileUrl">
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      {{ props.row.fileName }}
                    </q-item-section>

                  </q-item>
                  <q-item v-else>
                    <q-item-section avatar>
                      <q-avatar>
                        <q-btn round v-if="props.row.mimeSubType === 'pdf'" icon="description" color="primary"
                               target="_blank" :href="props.row.fileUrl" dense/>
                        <q-btn round v-else-if="props.row.mimeSubType === 'msword'" icon="description" color="blue"
                               target="_blank" :href="props.row.fileUrl" dense/>
                        <q-btn round v-else-if="props.row.mimeSubType === 'vnd.ms-excel'" icon="description"
                               color="green" target="_blank" :href="props.row.fileUrl" dense/>
                        <q-btn round v-else-if="props.row.mimeSubType === 'vnd.oasis.opendocument.spreadsheet'"
                               icon="description" color="orange" target="_blank" :href="props.row.fileUrl" dense/>
                        <q-btn round
                               v-else-if="props.row.mimeSubType === 'vnd.openxmlformats-officedocument.spreadsheetml.sheet'"
                               icon="description" color="green" target="_blank" :href="props.row.fileUrl" dense/>
                        <q-btn round
                               v-else-if="props.row.mimeSubType === 'vnd.openxmlformats-officedocument.wordprocessingml.document'"
                               icon="description" color="blue" target="_blank" :href="props.row.fileUrl" dense/>
                        <q-btn round v-else-if="props.row.mimeSubType === 'zip'" icon="description" color="orange"
                               target="_blank" :href="props.row.fileUrl" dense/>
                        <q-btn round v-else-if="props.row.mimeSubType === 'x-javascript'" icon="description"
                               color="yellow" target="_blank" :href="props.row.fileUrl" dense/>
                        <q-btn round v-else-if="props.row.mimeSubType === 'x-yaml'" icon="description" color="blue"
                               target="_blank" :href="props.row.fileUrl" dense/>
                        <q-btn round v-else-if="props.row.mimeSubType === 'octet-stream'" icon="description"
                               color="grey" target="_blank" :href="props.row.fileUrl" dense/>
                        <q-btn round v-else-if="props.row.mimeSubType === 'json'" icon="description" color="purple"
                               target="_blank" :href="props.row.fileUrl" dense/>
                        <q-btn round v-else icon="description" color="grey" target="_blank" :href="props.row.fileUrl"
                               dense/>
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      {{ props.row.fileName }}
                    </q-item-section>

                  </q-item>
                </q-td>

                <q-td :props="props" key="details">
                  <q-card-section class="text-center">
                    <div class="text-caption">{{ props.row.messageTimeStamp }}</div>
                    <div class="text-caption">{{ props.row.user }}</div>
                  </q-card-section>
                </q-td>

              </q-tr>
            </template>


          </q-table>

        </q-card-section>

      </q-card>
    </q-dialog>


    <q-dialog v-model="selectContactsForMessageForwarding">
      <q-card>
        <q-card-section>
          <div class="text-h6">Prosledi poruke</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-table
            dense
            flat bordered
            :rows="contacts"
            :columns="forwardMessageColumns"
            row-key="id"
            :filter="filterForwardMessageTable"
            virtual-scroll
            :rows-per-page-options="[0]"
            style="height: 500px"
          >
            <template v-slot:top-right>

              <q-input class="font-ubuntu-mono"
                       borderless
                       width="200px"
                       dense
                       debounce="300"
                       placeholder="Pretraga"
                       v-model="filterForwardMessageTable"
              >
                <template v-slot:append>
                  <q-icon name="search"/>
                </template>
              </q-input>
            </template>
            <template v-slot:header="props">
              <q-tr :props="props" class="bg-primary text-white table-captions">
                <q-th
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                >
                  {{ col.label }}
                </q-th>
              </q-tr>
            </template>
            <template v-slot:body="props">
              <q-tr :props="props" class="font-noto">
                <q-td key="icon" :props="props">
                  <span><q-avatar size="sm" color="primary" text-color="white">
                    {{ props.row.letter }}
                  </q-avatar></span>
                </q-td>
                <q-td key="name" :props="props">
                  <span>{{ String(props.row.name + " " + props.row.surname) }}</span>
                </q-td>
                <q-td key="selected" :props="props">
                  <q-checkbox :val="props.row.id" v-model="forwardMessageTo"/>
                </q-td>
              </q-tr>
            </template>
          </q-table>

        </q-card-section>

        <q-card-actions align="center">

          <q-btn flat class="full-width" icon="forward" color="green" @click="forwardSelectedMessages(true)">
            <BaseTooltip tooltip="Prosledi poruke"/>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<style scoped>
.right-drawer-chat-users {
  flex-basis: 90%;
}

.right-drawer-chat {
  flex-basis: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.chat-messages {
  flex-basis: 90%;
  flex-grow: 1;
}
</style>

<style lang="sass">
.my-sticky-virtscroll-table
  /* height or max-height is important */
  height: 410px

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */


  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */


  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
