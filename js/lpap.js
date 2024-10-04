
//필수값 체크
function fn_validation(obj){
      var bEmpty = false;
      var focus;
      obj.each(function(index){
          if($(this).val() == ''){
              focus = $(this);
              alert($(this).attr('title') + '(은)는 필수 입력사항입니다.');
              focus.focus();
              bEmpty = true;
              return false;
          }
      });
      return bEmpty;
}

/*
 * 함수명 : chekPassword
 * 설명   : 비밀번호 유효성 확인
 */
function chekPassword(userId, pwec){

    if(pwec.length < 8) {
        alert("비밀번호는 8자이상만 입력 가능합니다.");
        $('#newPwd').focus();
        return false;           
    }
    
    if(pwec.length > 20) {
        alert("비밀번호는 20자까지만 입력 가능합니다.");
        $('#newPwd').focus();
        return false;           
    }
    
    var check1 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/.test(pwec);   //영문,숫자

    var check2 = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,20}$/.test(pwec);  //영문,특수문자

    var check3 = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,20}$/.test(pwec);  //영문, 특수문자, 숫자

    var check4 = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(pwec); //한글 제한

    if(check4){
        alert("비밀번호에 한글이 포함되었습니다.\n\n비밀번호는 영문자, 특수문자, 숫자 2개 이상조합으로 \n8자이상 20자까지 설정할 수 있습니다.");
        return false;
    }

    if(!(check1||check2||check3)){
        alert("사용할 수 없은 조합입니다.\n\n비밀번호는 영문자, 특수문자, 숫자 2개 이상조합으로 \n8자이상 20자까지 설정할 수 있습니다.");
        return false;
    }
    
    if(/(\w)\1\1/.test(pwec)){
        alert("같은 문자를 3번 이상 사용하실 수 없습니다.\n\n비밀번호는 영문자, 특수문자, 숫자 2개 이상조합으로 \n8자이상 20자까지 설정할 수 있습니다.");
        return false;
    }
    
    if(pwec.search(userId)>-1){
        alert("비밀번호에 아이디가 포함되었습니다.\n\n비밀번호는 영문자, 특수문자, 숫자 2개 이상조합으로 \n8자이상 20자까지 설정할 수 있습니다.");
        return false;
    }
    
    if(pwec.search(/\s/) != -1){
        alert("비밀번호에 공백이 포함되었습니다.\n\n비밀번호는 영문자, 특수문자, 숫자 2개 이상조합으로\n8자이상 20자까지 설정할 수 있습니다.");
        return false;
    }
    
    return true;
}

/*
 * 함수명 : gfnIdFormateValid
 * 설명   : ID 생성규칙함수
 */
function gfnIdFormateValid(userId) {
    var idReg = /^[a-z]+[a-z0-9]{5,14}$/g;
    if( !idReg.test( userId ) ) {
        alert("아이디는 영문 소문자로 시작하는 \n6~15자 영문 소문자 또는 숫자이어야 합니다.");
        return false;
    }
    
    return true;
}

/**
 * 함수명 : gfnOnlyNumber
 * 설명   : 숫자만 변환
 * @param value 입력숫자
 * @returns 숫자만 반환
 * @ 사용예:  
 *  $('#TEL_NO').on("keyup", function() {
 *      $('#TEL_NO').val(gfnOnlyNumber($('#TEL_NO').val()));
 *  });
 */
function gfnOnlyNumber(value) {
    var onlyNumber = 0;
    
    onlyNumber = value.replace(/[^0-9]/g,"");
    
    return onlyNumber;
}

/**
 * 함수명 : gfnAddCommas
 * 설명   : 천단위마다 콤마 생성 
 * @param x 
 * @returns 
 */
function gfnAddCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * 함수명 : gfnRemoveCommas
 * 설명   : 모든 콤마 제거
 * @param x
 * @returns
 */
function gfnRemoveCommas(x) {
    if(!x || x.length == 0) return "";
    else return x.split(",").join("");
}

/**
 * 함수명 : gfnFocus
 * 설명   : 숫자 객체에서 콤마 제거
 * @param obj
 * @returns 콤마제거된 값
 */
function gfnFocus(obj) {
    var x = obj.val();
    x = gfnRemoveCommas(x); 

    return x;
}

/**
 * 함수명 : gfnFocusout
 * 설명   : 숫자 객체에 콤마 추가
 * @param obj
 * @returns
 */
function gfnFocusout(obj) {
    var x = obj.val();
    
    if(x && x.length > 0) {
        if(!$.isNumeric(x)) {
            x = gfnOnlyNumber(x);
        }
        
        x = gfnAddCommas(x);
    }
    
    return x;
}
/**
 * 함수명 : gfnFocusout
 * 설명   : 숫자 객체의 자리수 제한
 * @param e
 * @returns
 */
function gfnNumberMaxLength(obj){
    
    if(obj.value.length > obj.maxLength){
        obj.value = obj.value.slice(0, obj.maxLength);
    }
}