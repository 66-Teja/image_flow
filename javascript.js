function calculateMarginLeft(idx) {
  var currentMarginLeft = - ($containerWidth * (idx + 1)) + 'px';
  return currentMarginLeft;
}

var $carousel = $('.carousel');
var $imageContainer = $carousel.find('.images');
var $links = $carousel.find('.buttons');
var $images = $imageContainer.find('img');
var $containerWidth = $imageContainer.width();
var $numImages = $images.size();
var $imageContainerWidth = $containerWidth * $numImages;
// console.log($imageContainerWidth);

$imageContainer.css('width', $imageContainerWidth);
$images.css('width', $containerWidth);

var $prev = $links.first();
var $next = $links.last();
var currentIndex = 0;

$next.on('click', function(e) {
  e.preventDefault();
  currentIndex += 1;
  if(currentIndex > 3) return;
  console.log(calculateMarginLeft(currentIndex));
  $imageContainer.css('margin-left', calculateMarginLeft(currentIndex));
});

 $prev.on('click', function(e) {
   e.preventDefault();
   currentIndex -= 1;
   if(currentIndex < 0) return;
   console.log(calculateMarginLeft(currentIndex));
   $imageContainer.css('margin-left', calculateMarginLeft(currentIndex));
 });
