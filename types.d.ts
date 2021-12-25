import {BeDecoratedProps} from 'be-decorated/types';

export interface BeFruitfulVirtualProps{
    waitTime: number;

}

export interface BeFruitfulProps extends BeFruitfulVirtualProps{
    proxy: HTMLTemplateElement & BeFruitfulVirtualProps;
}

export interface BeFruitfulActions{
    onWaitTime(self: this): void;
}