//Imports
import { _lenc , _t , _half, _print, _rnum , _dbl, _add , _sub, _mult , _div , _rect , _square , tri , _calctri, days, months, year, lyear, _arrayD, _sethtml , 
_setcolor , _setBackgroundColor , _setleftMargin, _setbottomMargin , _setrightMargin , _settopMargin, _a, _upper, _lower, rem, em, _setpadding, singleDigit , 
    _setfontFamily, _setBorderRadius, _setdisplay, _click, _show, _hide, _clickshow, _clickhide, _fjson, _p, _sqrt, _box, _setBorderColor, _setBorderWidth,
_setshadow , _setBorderStyle , _setTextShadow , _setpos , /*_range*/} from './index.js'


//Library test
var numbers = [9, 5, 3, 7 , 6 , 1 , -5]
var a = 'JavascriptPildramaniaLibrary';
var num = 100;
var t = {
      Name: 'hi',
      Lname: 'bye'
};
console.log ( _lenc(a) );
console.log('Table ')
_t(t);
console.log('\n')
console.log('\n')
console.log( _half(num));
_print('Custom print');
_print(_rnum(12))
_print(_add(10 , 5))
_print( _sub(10 , 5))
_print(_mult(10 , 5))
_print(_div(10 , 5))
_print(_rect(5 , 4));
_print(_square(4));
_print(tri);
_t(_calctri( 2 , 4 , 3))
_print(months);
_print(days);
_print(year);
_print(lyear);
var hi = ['namaste' , 'namaskar' , 'konichiwa' , 'Hello' , 'Hola']
_arrayD(hi)
_sethtml('#para' , 'Welcome to JPildramaniaLibrary')
_setcolor('#para' , 'cyan')
_setBackgroundColor( 'body' , 'black')
_setleftMargin('#para' , '165px')
_settopMargin('#para' , '72px' )
//_a('Page Working!')
_print(_upper('hi'))
_print(_lower('hi'))
_setpadding('#box' , '80px')
_setBackgroundColor('#box' , 'red' )
_setfontFamily('#para' , 'Fira Code')
_setBorderRadius('#box' , '20px');
_setdisplay('#box' , 'none')
// _click('#button' , function(){
    //   _setdisplay('#box' , 'block')
// })
//_click('#button' , function() {
    //  _show('#box')
//})
_clickshow('#button' , '#box')
_clickhide('#button2' , '#box')
//_click('#button2' , function() {
     // _hide('#box')
//})
_print(_fjson('http://api.open-notify.org/iss-now.json'))
_click('#button3', () => {
    var userInput = _p('Enter a text.');
    _sethtml('#showVal', `You typed = ${userInput}`);

})
_setcolor('#showVal', 'white');
_print(_sqrt(256))
var box = new _box('halo', 5, 6)
_print(box.getData())
_setBorderStyle('#box' , 'solid')
_setBorderWidth('#box', '2px');
_setcolor('#box', 'white')
_setshadow('#box', '2px 2px 2px black');
_setTextShadow('#para', '2px 2px 2px black')
_setrightMargin('#para', '780px');
