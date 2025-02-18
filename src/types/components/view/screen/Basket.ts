import { HeaderData } from '@/types/components/view/common/Header';
import { TicketData } from '@/types/components/view/partial/Ticket';

export interface BasketData {
	tickets: TicketData[];
	header: HeaderData;
	isActive: boolean;
	isDisabled: boolean;
	total: string;
}

export interface BasketSettings {
	onRemove: (id: string) => void;
	onClose: () => void;
	onNext: () => void;
	onBack: () => void;
}
