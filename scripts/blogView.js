'use strict';

var blogView = {};

blogView.render = function() {
  articles.forEach(function(a) {
    // $('#articles').append(a.toHtml('#article-template'));
    // $('#author-filter').append(a.toHtml('#author-filter-template'));
    // if($('#category-filter option:contains("'+ a.category + '")').length === 0) {
    //   $('#category-filter').append(a.toHtml('#category-filter-template'));
    // };
  });
};

blogView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

blogView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

blogView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

blogView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    if($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
    }
  });
};

blogView.initNewArticlePage = function () {
  console.log('.tab-content');
  $('.tab-content').show();
  $('#export-field').hide();
  $('#article-json').on('click', function() {
    $(this).select();
  });
  $('#new-form').on('change', blogView.create);
};

blogView.create = function() {
  $('#article-preview').empty();
  var formArticle = new Article({
    title: $('#article-title').val(),
    author: $('#article-author').val(),
    authorUrl: $('#article-author-url').val(),
    body: $('#article-body').val(),
    publishedOn: $('#article-published:checked').length ? new Date() : null
  });
  console.log(formArticle);
  $('#article-preview').append(formArticle.toHtml('#article-template'));

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $('#export-field').show();
  $('#article-json').val(JSON.stringify(formArticle) + ',');
};

blogView.render();
blogView.handleCategoryFilter();
blogView.handleAuthorFilter();
blogView.handleMainNav();
blogView.create();
blogView.setTeasers();
blogView.initNewArticlePage();
