'use strict';

var entries = [];

function BlogPost (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

BlogPost.prototype.toHtml = function() {
  var $newEntry = $('article.template').clone();
  $newEntry.removeClass('template');
  $newEntry.attr('data-category', this.category);
  $newEntry.attr('data-author', this.author);
  $newEntry.find('.byline a').text(this.author);
  $newEntry.find('.byline a').attr('href', this.authorUrl);
  $newEntry.find('h1:first').text(this.title);
  $newEntry.find('.article-body').html(this.body);
  $newEntry.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newEntry.find('time[pubdate]').attr('title', this.publishedOn);
  $newEntry.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  return $newEntry;
};

ourLocalData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

ourLocalData.forEach(function(ele) {
  entries.push(new BlogPost(ele));
});

entries.forEach(function(a){
  $('#entries').append(a.toHtml());
});
