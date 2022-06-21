import { BaseRepository } from "../base.repository";

export class MixcloudRepository extends BaseRepository {
    async getFromApi(): Promise<{}[]| void>{
        return new Promise(()=>{return [{}]});
    }

    async getArtistFromApi(): Promise<{}[]> {
        return new Promise(() => {return [{}]});
    }

    async getShowFromApi(): Promise<{}[]> {
        return new Promise(() => {return [{}]});
    }

    async getUserFromApi(): Promise<{}[]> {
        return new Promise(() => {return [{}]});
    }

    async getConnectionsFromApi(): Promise<{}[]> {
        return new Promise(() => {return [{}]});
    }
}