const base = {
    get() {
        return {
            url : "http://localhost:8080/shoujixiaoshou/",
            name: "shoujixiaoshou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shoujixiaoshou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "手机销售网站"
        } 
    }
}
export default base
