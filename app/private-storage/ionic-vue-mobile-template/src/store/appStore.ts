import {acceptHMRUpdate, defineStore} from "pinia";
import {AppStoreState, User} from "@/types";
import {Directory, Encoding, Filesystem} from "@capacitor/filesystem";

export const useAppStore = defineStore("busStopStore", {
    state: (): AppStoreState => ({
        users: []
    }),
    actions: {
        async initApp(){

            try{
                const userData = await Filesystem.readFile({
                    path: 'users.json',
                    directory: Directory.Data,
                    encoding: Encoding.UTF8,
                });

                if (typeof userData.data === "string") {
                    this.users = JSON.parse(userData.data);
                }
            }catch (e: any){
                console.log('no file');
            }

        },
        async addUser(user: User){
            this.users.unshift(user);
            await Filesystem.writeFile({
                path: 'users.json',
                data: JSON.stringify(this.users),
                directory: Directory.Data,
                encoding: Encoding.UTF8,
            });
        },
        async removeUser(id: string){
            const userIndex = this.users.findIndex(user => user.id === id);
            this.users.splice(userIndex, 1);
            await Filesystem.writeFile({
                path: 'users.json',
                data: JSON.stringify(this.users),
                directory: Directory.Data,
                encoding: Encoding.UTF8,
            });
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
