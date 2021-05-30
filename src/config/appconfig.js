const appTitle='南北乱炖'
const useSideMenu = true
const port = 6002
const hostname = window.location.hostname
const base_url =`http://${hostname}:${port}/` 
const PAGE_SIZE = 5
const USER_KEY ='LOGINUSER'

export default{
    appTitle,
    useSideMenu,
    port,
    HostName:hostname,
    USER_KEY,
    /**
     * @description 地址:http://host:port/
     */
    BASE_URL:base_url,
    PageSize:PAGE_SIZE
}