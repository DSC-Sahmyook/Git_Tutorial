$(document).ready(()=>{
    let list = [
        { nm : "유경수" , user_nm : "yoogomja" , url : "https://github.com/yoogomja" },
        { nm : "배성현" , user_nm : "baeseongh" , url : "https://github.com/baeseongh" },
        { nm : "신세경" , user_nm : "신세경" , url : "https://github.com/baeseongh" },
        { nm : "송다운" , user_nm : "haryoung" , url : "https://github.com/HaRyoung" },
        { nm : "박종완" , user_nm : "Parkjoungwan" , url : "https://github.com/Parkjoungwan" },
        { nm : "이정민" , user_nm : "BBongDDa" , url : "https://github.com/BBongDDa" },

    ];
    list.map((item , idx) =>{
        let copied = $('.mockup').clone().removeClass('mockup');
        copied.find('.item-name').text(item.nm);
        copied.find('.item-link').attr('href' , item.url);
        copied.find('.item-github-account').text("@" + item.user_nm);
        $('.list-items').append(copied);
    });
});