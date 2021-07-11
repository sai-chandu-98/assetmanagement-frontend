import axios from 'axios'

const CREATEASSET_REST_API_URL = 'http://localhost:8090/creatAsset'
const GETASSET_REST_API_URL = 'http://localhost:8090/assets/{AssetsId}'
const DELETEASSET_REST_API_URL = 'http://localhost:8090/deleteAssetsDetailsById/{id}'
class AssetService {

    getAsset(){
        return axios.get(GETASSET_REST_API_URL);
    }
    createAssets(){
        return axios.post(CREATEASSET_REST_API_URL);
    }
    deleteAssets(assetsId){
        return axios.delete(DELETEASSET_REST_API_URL);
    }
}

export default new AssetService();