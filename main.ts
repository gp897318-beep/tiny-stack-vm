import{mkdirSync as g,readdirSync as h,readFileSync as f,writeFileSync as w}from'node:fs'
const T='!2b%\'+,0        *******&***&*** ***             AEEA!           &)              %%\"%'
function R(p,q){
let D=new Int32Array(576),s=0,c=0,pc=0,t=0,i=0,o=[]
const F=x=>[Buffer.from(o),x]
for(;;){
if(t++==1e6)return F(10)
if(pc>>>0>=p.length)return F(9)
let op=p[pc],k=T.charCodeAt(op)-33
if(!(k>=0))return F(5)
let im=k>>4,po=k>>2&3,pu=k&3,n=pc+1+im
if(n>p.length)return F(9)
if(s<po)return F(2)
if(s-po+pu>256)return F(3)
pc=n
if(!op)return F(0)
else if(op<2)D[s++]=p[n-1]<<24>>24
else if(op<3)D[s++]=p[n-4]|p[n-3]<<8|p[n-2]<<16|p[n-1]<<24
else if(op<4)s--
else if(op<5)D[s]=D[s-1],s++
else if(op<6)[D[s-1],D[s-2]]=[D[s-2],D[s-1]]
else if(op<7)D[s]=D[s-2],s++
else if(op<8)[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]]
else if(op==23)D[s-1]=-D[s-1]
else if(op==27)D[s-1]=~D[s-1]
else if(op-16<19){
let b=D[s-1],a=D[s-2]
if(!b&op>18&op<23)return F(4)
D[--s-1]=op<17?a+b:op<18?a-b:op<19?Math.imul(a,b):op<20?a/b:op<21?a%b:op<22?(a>>>0)/(b>>>0):op<23?(a>>>0)%(b>>>0):op<25?a&b:op<26?a|b:op<27?a^b:op<29?a<<b:op<30?a>>b:op<31?a>>>b:op<33?a==b:op<34?a<b:a>>>0<b>>>0
}
else if(op-48<3){let v=op>48?D[--s]:1;if(op==48||op==49==!v)pc=n+((p[n-2]|p[n-1]<<8)<<16>>16)}
else if(op<52){if(c==64)return F(7);D[256+c++]=n;pc=p[n-2]|p[n-1]<<8}
else if(op<53){if(!c)return F(8);pc=D[256+--c]}
else if(op<65){let a=D[s-1];if(a>>>0>255)return F(6);D[s-1]=D[320+a]}
else if(op<66){let a=D[s-1];if(a>>>0>255)return F(6);D[320+a]=D[s-2],s-=2}
else if(op<81){let b=new TextEncoder().encode(''+D[s-1]);if(o.length+b.length>65536)return F(11);s--;o.push(...b)}
else if(op<82){if(o.length>65535)return F(11);o.push(D[--s]&255)}
else if(op<83)D[s++]=i<q.length?q[i++]:-1
else return F(D[--s]&255)
}
}
const I=process.env.MAKEFUN_INPUT_DIR||'/input',O=process.env.MAKEFUN_OUTPUT_DIR||'/output'
for(const d of h(I)){let a=I+'/'+d,b=O+'/'+d,r=R(f(a+'/program.bin'),f(a+'/input.bin'));g(b,{recursive:!0});w(b+'/stdout.bin',r[0]);w(b+'/exit.txt',r[1]+'\n')}