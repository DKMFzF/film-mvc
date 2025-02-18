import { HeaderData } from '@/types/components/view/common/Header';

export interface SuccessData {
	content: HeaderData;
	isActive: boolean;
}

export interface SuccessSettings {
	onClose: () => void;
}
