/**
 * Icarus theme – fancybox tag plugin for Hexo
 * @author cser
 */

var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;

/**
 * Fancybox tag
 *
 * Syntax:
 *   {% fancybox /path/to/image [/path/to/thumbnail] [title] %}
 */

// Escape HTML special characters to prevent XSS
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

hexo.extend.tag.register('fancybox', function(args){
  var original = args.shift(),
    thumbnail = '';

  if (args.length && rUrl.test(args[0])){
    thumbnail = args.shift();
  }

  var title = escapeHtml(args.join(' '));
  var safeOriginal = escapeHtml(original);
  var safeThumbnail = escapeHtml(thumbnail || original);

  return '<a class="fancybox" href="' + safeOriginal + '" title="' + title + '">' +
    '<img src="' + safeThumbnail + '" alt="' + title + '">' +
    '</a>' +
    (title ? '<span class="caption">' + title + '</span>' : '');
});
