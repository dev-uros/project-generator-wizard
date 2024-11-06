import {acceptHMRUpdate, defineStore} from 'pinia';
import {GetUsersFilters, StoreNewUserRequest, UserStoreState} from "./types";
import {getUsers} from "src/modules/administration/users/services/getUsers";
import {storeUser} from "./services/storeUser";
import {showUser} from "./services/showUser";
import {updateUser} from "./services/updateUser";
import {setAccountState} from "./services/setUserAccountState";
import {sendActivationEmail} from "./services/sendUserAccountActivationEmail";


export const useUsersStore = defineStore('usersStore', {
  state: (): UserStoreState => ({
    users: [],
    userDetails: undefined
  }),
  getters: {
    getUsers: (state) => state.users,
    getUserDetails: (state) => state.userDetails
  },
  actions: {
    async getUserList(request: GetUsersFilters){
      this.users = await getUsers({accountState: request});
    },
    async storeNewUser(request: StoreNewUserRequest) {
      this.users.unshift(await storeUser(request));
    },
    async showUserDetails(userId: number) {
      this.userDetails = await showUser(userId);
    },
    async updateUser(userId: number, request: StoreNewUserRequest){
      this.userDetails = updateUser(userId, request)
    },
    async setAccountState(userId: number){
      this.userDetails = await setAccountState(userId);
    },
    async sendActivationEmail(userId: number){
      await sendActivationEmail(userId);
    }
  }

})



if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))
}

