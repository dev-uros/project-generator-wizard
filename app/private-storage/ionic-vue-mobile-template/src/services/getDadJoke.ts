import {CapacitorHttp, HttpResponse} from "@capacitor/core";


export async function getDadJoke() {

    const options = {
        url: `${import.meta.env.VITE_DAD_JOKE_API_URL}`,
        headers: {'Accept': 'application/json'},
    };
    try {
        const response: HttpResponse = await CapacitorHttp.get(options);

        if (response.status === 200) {
            return response.data.joke;
        } else {
            return 'I tried to fetch some data, but it stood me up… guess it had commit issues!';
        }
    } catch (e: any) {
        return 'I tried to fetch some data, but it stood me up… guess it had commit issues!';

    }

}

