/*!
 *                      2022
 * All Rights Reserved for Oziku Technologies LLC
 *            https://www.oziku.tech/
 */

const ON_INSTALL_OPEN_URL="127.0.0.1",ON_UNINSTALL_OPEN_URL="127.0.0.1";!function(e,t,n,a,o){const s=e.local;t.onInstalled.addListener((async e=>{e.previousVersion!==t.getManifest().version&&s.set({config:{}}),t.setUninstallURL(ON_UNINSTALL_OPEN_URL),e.reason===t.OnInstalledReason.INSTALL&&n.create({url:ON_INSTALL_OPEN_URL}),o.removeAll((()=>{o.create({id:"rate",title:`${a.getMessage("please_rate")} ★★★★★`,contexts:["action","browser_action","page_action"]})}))})),o.onClicked.addListener(((e,t)=>{"rate"===e.menuItemId&&n.create({url:"https://t.ly/lexia_reader"})})),e.onChanged.addListener(((e,t)=>{void 0!==e.config?.newValue?.muteSounds&&function a(e){n.query({},(t=>{t.forEach((t=>{n.update(t.id,{muted:e})}))}))}(e.config.newValue.muteSounds)})),t.onMessage.addListener(((e,t,n)=>{"getMyInfo"===e.m?n({tabId:t?.tab?.id,frameId:t?.frameId}):n&&n()})),n.onCreated.addListener((e=>{s.get(["config"],(t=>{const a=t.config?.muteSounds;n.update(e.id,{muted:a??!1})}))}))}(chrome.storage,chrome.runtime,chrome.tabs,chrome.i18n,chrome.contextMenus);