
class Consts {
    static readonly RawGApiKey: string = "a468eb99cab640cb9736417afc1652ba";
    static readonly RawGApiBaseUrl : string = "https://api.rawg.io/api";
}

export class UrlResolver {
    static Resolve = (baseUrl:string, relativeUrl:string) : string => {
        return new URL(relativeUrl, baseUrl).href;
    }
}

export default Consts;