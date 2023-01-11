$(loadCategories());

function loadCategories() {
  $(".category").hide()
  $(".category_name").hide()
  $(".catalog").hide()
  $.ajax({
    url: "data/categories.json",
    success: function(result) {
      $.each(result, function(index, item) {
        var categories = $(".category:first").clone()
        var id = item.id;
        var shortName = item.short_name;
        var name = item.name;
        var notes = item.notes;
        var url = item.url;
        $(categories).find(".category-short_name").html(shortName);
        $(categories).find(".category-name").html(name).on("click", function() {
          loadNameCategory(shortName, url);
          loadCatalogs(shortName, url);
        });
        $(categories).find(".category-notes").html(notes);
        $(categories).show()
        $(categories).appendTo($(".container"))
      });
    }
  });
}

function loadNameCategory(categoryShortName, link) {
  $(".category").hide()
  $(".category_name").hide()
  $(".catalog").hide()
  $.ajax({
    url: link,
    success: function(result) {
      $.each(result.name_category, function(index, item) {
        var categories = $(".category_name:first").clone()
        var nameCategory = item.name_cat;
        $(categories).find(".category_name-name_cat").html(nameCategory);
        $(categories).show()
        $(categories).appendTo($(".container"))
      });
    }
  });
}

function loadCatalogs(categoryShortName, link) {
    $(".category").hide()
    $(".category_name").hide()
    $(".catalog").hide()
    $.ajax({
      url: link,
      success: function(result) {
        $.each(result.catalog_goods, function(index, item) {
          var catalogs = $(".catalog:first").clone()
          var id = item.id;
          var shortName = item.short_name;
          var name = item.name;
          var description = item.description;
          var price = item.price;
          $(catalogs).find(".catalog-short_name").html(shortName);
          $(catalogs).find(".catalog-name").html(name);
          $(catalogs).find(".catalog-description").html(description);
          $(catalogs).find(".catalog-price").html(price);
          $(catalogs).find(".catalog-img").attr("src", "images/catalog/" + categoryShortName + "/" + shortName + ".jpg");
          $(catalogs).show()
          $(catalogs).appendTo($(".container"))
        });
      }
    })    
};