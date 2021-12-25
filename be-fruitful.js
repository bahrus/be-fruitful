import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
export class BeFruitfulController {
    onWaitTime({ proxy, waitTime }) {
        setTimeout(async () => {
            const rn = proxy.getRootNode();
            const host = rn.host;
            await customElements.whenDefined(host.localName);
            const clone = proxy.content.cloneNode(true);
            const children = Array.from(clone.children);
            for (const child of children) {
                const slotName = child.getAttribute('slot');
                const existingSlot = rn.querySelector(`[slot="${slotName}"]`);
                if (existingSlot === null) {
                    rn.appendChild(child);
                }
            }
        }, waitTime);
    }
}
const tagName = 'be-fruitful';
const ifWantsToBe = 'fruitful';
const upgrade = 'template';
define({
    config: {
        tagName,
        propDefaults: {
            ifWantsToBe,
            upgrade,
            forceVisible: ['template'],
            proxyPropDefaults: {
                waitTime: 50,
            },
            virtualProps: ['waitTime'],
        },
        actions: {
            onWaitTime: 'waitTime',
        }
    },
    complexPropDefaults: {
        controller: BeFruitfulController,
    }
});
register(ifWantsToBe, upgrade, tagName);
