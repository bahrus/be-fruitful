import {BeDecoratedProps, define} from 'be-decorated/be-decorated.js';
import {BeFruitfulVirtualProps, BeFruitfulActions, BeFruitfulProps} from './types';
import {register} from 'be-hive/register.js';

export class BeFruitfulController implements BeFruitfulActions{
    onWaitTime({proxy, waitTime}: this): void{
        setTimeout(async () => {
            const rn = proxy.getRootNode() as DocumentFragment;
            const host = (<any>rn).host as HTMLElement;
            await customElements.whenDefined(host.localName);
            const clone = proxy.content.cloneNode(true) as DocumentFragment;
            const children = Array.from(clone.children);
            for(const child of children){
                const slotName = child.getAttribute('slot');
                const existingSlot = rn.querySelector(`[slot="${slotName}"]`);
                if(existingSlot === null){
                    rn.appendChild(child);
                }
            }
        }, waitTime);
    }
}

export interface BeFruitfulController extends BeFruitfulProps{}

const tagName = 'be-fruitful';

const ifWantsToBe = 'fruitful';

const upgrade = 'template';

define<BeFruitfulProps & BeDecoratedProps<BeFruitfulProps, BeFruitfulActions>, BeFruitfulActions>({
    config:{
        tagName,
        propDefaults:{
            ifWantsToBe,
            upgrade,
            forceVisible: ['template'],
            proxyPropDefaults:{
                waitTime: 50,
            },
            virtualProps: ['waitTime'],
        },
        actions:{
            onWaitTime: 'waitTime',
        }
    },
    complexPropDefaults:{
        controller: BeFruitfulController,
    }
});

register(ifWantsToBe, upgrade, tagName);