$(document).ready(function(e) {

    // example products data
    var data = '{"products:['
                +'{"product_name": "yeezy", "product_des":"The adidas Yeezy 350 Boost is a low-top sneaker designed by Kanye West.' +
        'The shoes first debuted at the YEEZY Season fashion show in February 2015 and new colorways were unveiled during YEEZY Season 3 on February 11th, 2016.", ' +
        '"product_price":"200", "img_dir":"img/img/products_img/yeezy_350.jpg"}'
                +'{"product_name": "yeezy 2", "product_des":"The adidas Yeezy 350 Boost is a low-top sneaker designed by Kanye West.' +
        'The shoes first debuted at the YEEZY Season fashion show in February 2015 and new colorways were unveiled during YEEZY Season 3 on February 11th, 2016.", ' +
        '"product_price":"300", "img_dir":"img/img/products_img/yeezy_350.jpg"}'
                +'{"product_name": "yeezy 3", "product_des":"The adidas Yeezy 350 Boost is a low-top sneaker designed by Kanye West.' +
        'The shoes first debuted at the YEEZY Season fashion show in February 2015 and new colorways were unveiled during YEEZY Season 3 on February 11th, 2016.", ' +
        '"product_price":"400", "img_dir":"img/img/products_img/yeezy_350.jpg"}]"}';


// the nav "shop" is clicked
    $('#shop').click(function () {
        console.log("display products");
        $('#display_content').empty();
        loadProducts();

    });
// load the products info from data and display
    function loadProducts(){
        $display_content = $('#display_content');
        $.ajax({
            url:'/products',//may change this later for the according the serverside
            type:'GET',
            dataType: 'json',
            success: function (products) {
                $.each(products, function (i, product) {
                    $display_content.append(
                        '<li class="products_list">'+
                            '<img src="'+product.picture_dir+'" alt="'+product.product_name+'">'+
                            '<span class="products_des">'+
                                '<h2>'+product.product_name+'</h2>'+
                                '<p>'+product.product_des+'</p>'+
                                '<p>&#36; '+product.price+'</p>'+
                            '</span>'+
                            '<span class="add_cart"><a>Add to cart</a></span>' +
                        '</li>'
                    );
                });
            },
            error: function (error) {
                console.log("Unable to load products from database");
            }
        });
    }




});//ends
