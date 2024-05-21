/*!
 *                      2022
 * All Rights Reserved for Oziku Technologies LLC
 *            https://www.oziku.tech/
 */

const speechSynthApi="speechSynthesis"in window?window.speechSynthesis:void 0,utterances=[];var TtsPlayer={isTtsAvailable:()=>void 0!==speechSynthApi,isSpeaking:()=>!!speechSynthApi?.speaking,isPaused:()=>!!speechSynthApi?.paused,resume:()=>speechSynthApi?.resume(),speak:e=>{utterances.push(e),speechSynthApi?.speak(e)},pause:()=>speechSynthApi?.pause(),cancel:e=>{e&&utterances.length>0&&(utterances[utterances.length-1].onend=utterances[utterances.length-1].onerror=void 0),speechSynthApi?.cancel()}};