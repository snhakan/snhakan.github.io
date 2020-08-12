// 右侧菜单鼠标进入事件
function floatingMenuOver(){
    var side_floating_menu = $("#cus_ser");;
    side_floating_menu.stop();
    side_floating_menu.animate({right: "-32px"}, 300, 'swing');
    if($(window).width()<769){
        var t=setInterval(function time(){
            side_floating_menu.stop();
            side_floating_menu.animate({right: "-102px"}, "slow", 'swing');
            clearInterval(t)
            side_floating_menu=null;
        },3000)
    }
}

// 右侧菜单鼠标离开事件
function floatingMenuOut(){
    var side_floating_menu = $("#cus_ser");;
    side_floating_menu.stop();
    side_floating_menu.animate({right: "-102px"}, 300, 'swing');
    side_floating_menu=null;
}

function initSideFloatingMenu(on){
    var side_floating_menu = $("#cus_ser");
    var side_floating_menus=$(".cus_ser_>.title")
    console.log('ccccc',on)
    if(on===true){
        side_floating_menu.find('.close').on('click',function () {
            side_floating_menu.css({display: 'none'});
        })
        side_floating_menus.on('mouseenter',floatingMenuOver)
        side_floating_menu.on('mouseleave',floatingMenuOut)
        side_floating_menus.on('click',floatingMenuOver)
    }else{
        side_floating_menu.off()
        side_floating_menu.css('right','-34px')
    }

}

function spreadTheSideFloatingMenu(width)
{
    var side_floating_menu = $("#cus_ser");
    if(width==null || width==undefined){
        width=1
    }
    side_floating_menu.css({width: width})
}


function initSidebarClicker(clicker_tag, show_icon, close_icon,isOpen, parent_tag) {//新增isOpen参数用于控制是否默认展开左侧菜单，默认为false

    if (parent_tag === undefined || parent_tag === null) {
        parent_tag = 'sidebar-product'
    }
    if (show_icon === undefined || show_icon === null) {
        show_icon = ''
    }
    if (close_icon === undefined || close_icon === null) {
        close_icon = ''
    }
    if (isOpen === undefined || isOpen === null) {
        isOpen = false
    }

    var parent_obj = $('.' + parent_tag)
    // parent_obj.find('dd').hide()
    isOpen?'':parent_obj.find('dd').hide();
    // isOpen?close_icon:
    $.each(parent_obj.find('dl'), function (k, v) {
        if ($(v).find('dd').length > 0 && show_icon !== '') {
            var open_con=isOpen?close_icon:show_icon
            var show_clicker = '<' + clicker_tag + '>' + open_con + '</' + clicker_tag + '>'
            console.log("xxxxx",show_clicker)
            $(v).prepend(show_clicker)
        }
    })

    var top_catalog_id = $('meta[name=t_catalog]').attr('content');
    if (top_catalog_id !== null || top_catalog_id !== undefined) {
        parent_obj.find('.c' + top_catalog_id).find('dd').slideDown(300)
        parent_obj.find('.c' + top_catalog_id).addClass('clicker_active')
        parent_obj.find('.c' + top_catalog_id).find('dt').html(close_icon)
    }

    parent_obj.find(clicker_tag).click(function () {//点击展开事件
        var thisDd = $(this).parent().find('dd')

        if (thisDd.is(':visible')) {
            thisDd.slideUp(300)
            $(this).removeClass('clicker_active')
            if (show_icon !== '') {
                $(this).html(show_icon)
            }
        } else {
            var otherDd = parent_obj.find('dd:visible')
            var otherDt = parent_obj.find(clicker_tag + '.clicker_active')
            otherDd.slideUp(300, function () {
                otherDt.removeClass('clicker_active')
                if (show_icon !== '') {
                    otherDt.html(show_icon)
                }
            })
            thisDd.slideDown(300)
            $(this).addClass('clicker_active')
            if (close_icon !== '') {
                $(this).html(close_icon)
            }

        }

    })
}

function initSidebarClickerWithoutLink(clicker_tag, expand_label,show_icon, close_icon, parent_tag) {
    if (parent_tag === undefined || parent_tag === null) {  
        parent_tag = 'sidebar-product'
    }
    if (show_icon === undefined || show_icon === null) {
        show_icon = ''
    }
    if (close_icon === undefined || close_icon === null) {
        close_icon = ''
    }

    var parent_obj = $('.' + parent_tag)
    parent_obj.find('dd').hide();
    $.each(parent_obj.find('dl'), function (k, v) {
        if ($(v).find('dd').length > 0 && show_icon !== '') {
            var show_clicker = '<' + expand_label + '>' + show_icon + '</' + expand_label + '>'
            $(v).prepend(show_clicker)
        }
    })

    var top_catalog_id = $('meta[name=t_catalog]').attr('content');
    if (top_catalog_id !== null || top_catalog_id !== undefined) {
        parent_obj.find('.c' + top_catalog_id).find('dd').slideDown(300)
        parent_obj.find('.c' + top_catalog_id).addClass('clicker_active')
        parent_obj.find('.c' + top_catalog_id).find('dt').html(close_icon)
    }

    parent_obj.find(clicker_tag).click(function () {
        var thisDd = $(this).parents('dl').find('dd')

        if (thisDd.is(':visible')) {
            thisDd.slideUp(300)
            $(this).parents('dl').find(expand_label).removeClass('clicker_active')
            if (show_icon !== '') {
                $(this).parents('dl').find(expand_label).html(show_icon)
            }
        } else {
            var otherDd = parent_obj.find('dd:visible')
            var otherDt = parent_obj.find(expand_label + '.clicker_active')
            otherDd.slideUp(300, function () {
                otherDt.removeClass('clicker_active')
                if (show_icon !== '') {
                    otherDt.html(show_icon)
                }
            })
            thisDd.slideDown(300)
            $(this).parents('dl').find(expand_label).addClass('clicker_active')
            if (close_icon !== '') {
                $(this).parents('dl').find(expand_label).html(close_icon)
            }

        }

    })
}