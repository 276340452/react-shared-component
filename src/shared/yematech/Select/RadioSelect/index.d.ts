/// <reference types="react" />
import './select.scss';
declare type SizeType = 'small' | 'middle' | 'large' | undefined;
interface IRadiosSelect {
    className?: string;
    loading?: boolean;
    placeholder?: string;
    size?: SizeType;
    columns: Array<any>;
    rowKey: string;
    label: string;
    value: any;
    dataSource: Array<any>;
    onSearch?: Function;
    onFresh?: Function;
    onConfirm?: Function;
    onCancel?: Function;
}
declare const RadiosSelect: (props: IRadiosSelect) => JSX.Element;
export default RadiosSelect;
