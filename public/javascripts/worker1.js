if (Worker) {
  console.log('yes')
} else {
  console.log('no')
}
/**
 * https://developer.mozilla.org/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope 详解
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/Worker Worker() 详解 
 * worker('src',{name: '',type:'',credentials:''}) 
 */
var i = 0
setInterval(() => {
  i++;
  if(i>3) {
    close();
    console.log('this',this,WorkerGlobalScope,self)  // this DedicatedWorkerGlobalScope {name: "", onmessage: null, onmessageerror: null, postMessage: ƒ, close: ƒ, …} ƒ WorkerGlobalScope() { [native code] } DedicatedWorkerGlobalScope {name: "", onmessage: null, onmessageerror: null, postMessage: ƒ, close: ƒ, …}
  } 
  postMessage({'i': i})
}, 1000);
importScripts('worker_import.js');
console.log('dom',dom)
