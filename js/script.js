$(document).ready(function(){
  // .header를 저장한다.
  let header = $('.header');
  let gnb = $('.gnb');
  // 펼쳐졌을 때의 높이값
  let gnbMaxHeight = gnb.outerHeight();
  // 닫혓을때의 높의값
  let gnbMinHeight = header.outerHeight();
  //  기본 header의 높의값 적용
  header.css('height', gnbMinHeight);
  gnb.mouseenter(function(){
    header.css('height', gnbMaxHeight);
  });
  gnb.mouseleave(function(){
    header.css('height', gnbMinHeight);
  });

  // 주메뉴 포커스 기능
  let depth_1_Li = $('.depth1 > li');  
  $.each(depth_1_Li, function(index){
    $(this).mouseenter(function(){
      // li 의 > a 를 찾는다.
      $(this).find('>a').addClass('depth1-focus');
    });
    $(this).mouseleave(function(){
      // li 의 > a 를 찾는다.
      $(this).find('>a').removeClass('depth1-focus');
    });
  });

  // 컨텐츠 이동 버튼
  let visualBt = $('.visual-bt');
  // .part 영역이 
  // html의 상단(top)으로 부터
  // 어느만큼 떨어진 위치 px 값
  let partY = $('.part').offset().top;
  visualBt.click(function(){
    $('html').stop().animate({
      scrollTop: partY
    });
  });

  // part 배경 배치
  let partListLi = $('.part-list li');
  let partListW = 1200 / partListLi.length;
  $.each(partListLi, function(index){
    let tgX = partListW * index;
    tgX = -1 * tgX;
    $(this).css('background-position-x', tgX);
  });

  // .part-list li 중에 첫번째 것을 선택한다.
  let first = partListLi.eq(0);
  let last = partListLi.eq(partListLi.length - 1);
  // first.before(last);
  
  
  

});

window.onload = function(){  
}