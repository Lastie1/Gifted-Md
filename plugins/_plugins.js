const _0x4dadb3=_0x2302;function _0x331e(){const _0x367c2e=['botname','2976812dAcIec','owner','../lib','*_Uhh\x20Please,\x20Provide\x20Me\x20Plugin\x20Url_*','58BvwfUH','\x20\x0a\x0acmdName\x20plugins\x0a','shutdown','reply','5255sPpEmL','805185rDXfLY','error','192195lqbDTv','Shows\x20list\x20of\x20all\x20externally\x20installed\x20modules','Gifted-Md\x20is\x20Restarting...','4566eUSsoj','<plugin\x20name>','7HKLWPc','<gist\x20url>','plugin','text','30IxgoRh','send','11xJEzsY','61083boAmcX','child_process','remove','install','toLowerCase','*_There\x27s\x20no\x20plugin\x20install\x20in\x20','3845384yBArlu','plugins','10735116BbNPiD','*_Uhh\x20Please,\x20Provide\x20Me\x20Plugin\x20Name_*','alls','quoted'];_0x331e=function(){return _0x367c2e;};return _0x331e();}(function(_0x4eea7f,_0x4183ac){const _0x5d9223=_0x2302,_0x3fc657=_0x4eea7f();while(!![]){try{const _0x4088fe=-parseInt(_0x5d9223(0x1cd))/0x1+parseInt(_0x5d9223(0x1c6))/0x2*(-parseInt(_0x5d9223(0x1b5))/0x3)+parseInt(_0x5d9223(0x1c2))/0x4+parseInt(_0x5d9223(0x1ca))/0x5*(parseInt(_0x5d9223(0x1d0))/0x6)+-parseInt(_0x5d9223(0x1d2))/0x7*(-parseInt(_0x5d9223(0x1bb))/0x8)+-parseInt(_0x5d9223(0x1cb))/0x9*(-parseInt(_0x5d9223(0x1b2))/0xa)+parseInt(_0x5d9223(0x1b4))/0xb*(-parseInt(_0x5d9223(0x1bd))/0xc);if(_0x4088fe===_0x4183ac)break;else _0x3fc657['push'](_0x3fc657['shift']());}catch(_0x5b07c7){_0x3fc657['push'](_0x3fc657['shift']());}}}(_0x331e,0x96591));const {plugins,smd,Config}=require(_0x4dadb3(0x1c4));let s_ser=!![];function _0x2302(_0x75d4e3,_0x22c054){const _0x331ec7=_0x331e();return _0x2302=function(_0x2302ea,_0xe32bf8){_0x2302ea=_0x2302ea-0x1b2;let _0x4ec93b=_0x331ec7[_0x2302ea];return _0x4ec93b;},_0x2302(_0x75d4e3,_0x22c054);}smd({'cmdname':'restart','info':'To\x20restart\x20bot','type':'tools','fromMe':s_ser,'filename':__filename},async _0x324837=>{const _0x39824a=_0x4dadb3,{exec:_0x2c4e01}=require(_0x39824a(0x1b6));_0x324837[_0x39824a(0x1c9)](_0x39824a(0x1cf)),_0x2c4e01('pm2\x20restart\x20all');}),smd({'cmdname':_0x4dadb3(0x1c8),'info':'To\x20shutdown\x20bot','type':'tools','fromMe':s_ser,'filename':__filename},async _0x424d37=>{const _0x108144=_0x4dadb3,{exec:_0x5a302a}=require('child_process');_0x424d37[_0x108144(0x1c9)]('Gifted-Md\x20is\x20Shutting\x20down...'),_0x5a302a('pm2\x20stop\x20all');}),smd({'cmdname':_0x4dadb3(0x1bc),'alias':[_0x4dadb3(0x1d4)],'type':_0x4dadb3(0x1c3),'info':_0x4dadb3(0x1ce),'fromMe':s_ser,'filename':__filename,'use':'<name>'},async(_0x2a83d4,_0x700f42)=>{const _0x3cf166=_0x4dadb3;try{let _0x40841c=await plugins(_0x2a83d4,_0x3cf166(0x1bc),_0x700f42);return await _0x2a83d4['send'](!_0x40841c?_0x3cf166(0x1ba)+Config[_0x3cf166(0x1c1)]+'_*':!_0x700f42?'*All\x20Installed\x20Modules\x20are:-*\x0a\x0a'+_0x40841c:_0x40841c);}catch(_0x266529){_0x2a83d4[_0x3cf166(0x1cc)](_0x266529+_0x3cf166(0x1c7));}}),smd({'pattern':'uninstall','alias':['remove'],'type':_0x4dadb3(0x1c3),'info':'removes\x20external\x20modules.','fromMe':s_ser,'filename':__filename,'use':_0x4dadb3(0x1d1)},async(_0x129612,_0x4b5e5b)=>{const _0x1bd69e=_0x4dadb3;if(!_0x4b5e5b)return await _0x129612['reply'](_0x1bd69e(0x1be));if(_0x4b5e5b===_0x1bd69e(0x1bf))return await _0x129612[_0x1bd69e(0x1c9)](await plugins(_0x1bd69e(0x1b7),'all',__dirname));try{await _0x129612[_0x1bd69e(0x1b3)](await plugins(_0x129612,_0x1bd69e(0x1b7),_0x4b5e5b,__dirname),{},'',_0x129612);}catch{}}),smd({'cmdname':_0x4dadb3(0x1b8),'type':_0x4dadb3(0x1c3),'info':'Installs\x20external\x20modules..','fromMe':s_ser,'filename':__filename,'use':_0x4dadb3(0x1d3)},async(_0x3248bc,_0x56553c)=>{const _0x552d87=_0x4dadb3;let _0xa30f50=_0x56553c?_0x56553c:_0x3248bc[_0x552d87(0x1c0)]?_0x3248bc[_0x552d87(0x1c0)][_0x552d87(0x1d5)]:'';if(!_0xa30f50[_0x552d87(0x1b9)]()['includes']('https'))return await _0x3248bc['send'](_0x552d87(0x1c5));await _0x3248bc['reply'](await plugins(_0x3248bc,_0x552d87(0x1b8),_0xa30f50,__dirname));});