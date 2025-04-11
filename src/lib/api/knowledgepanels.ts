export type KnowledgePanelTitle = {
	title: string;
	subtitle?: string;
	grade: 'a' | 'b' | 'c' | 'd' | 'e' | 'unknown';
	icon_url: string;
	icon_color_from_evaluation: string;
	icon_size: string;
	type: string;
};

export type KnowledgePanelSize = 'small';

export type KnowledgePanel = {
	type: 'card' | 'inline';
	expanded: boolean;
	expand_for: string;
	title_element: KnowledgePanelTitle;
	elements: KnowledgeElement[];
	topics: string[];
	level: string;
	size?: KnowledgePanelSize;
};

export type KnowledgeElement =
	| KnowledgeTextElement
	| KnowledgeImageElement
	| KnowledgePanelGroupElement
	| KnowledgePanelElement
	| KnowledgeTableElement
	| KnowledgeActionElement
	| KnowledgeMapElement;

interface KnowledgeElementBase {
	element_type: string;
}

export type KnowledgeTextElement = KnowledgeElementBase & {
	element_type: 'text';
	text_element: {
		type: 'summary' | 'warning' | 'notes';
		html: string;
		language: string;
		lc: string;
		edit_field_id: string;
		edit_field_type: string;
		edit_field_value: string;
		source_url: string;
		source_text: string;
		source_lc: string;
		source_language: string;
	};
};

export type KnowledgeImageElement = KnowledgeElementBase & {
	element_type: 'image';
	image_element: {
		url: string;
		width: number;
		height: number;
		alt_text: string;
	};
};

export type KnowledgePanelGroupElement = KnowledgeElementBase & {
	element_type: 'panel_group';
	panel_group_element: {
		title: string;
		image?: KnowledgePanelImage;
		panel_ids: string[];
	};
};

export type KnowledgePanelImage = {
	alt: string;
	id: string;
	lc: string;
	sizes: Record<
		string,
		{
			height: number;
			width: number;
			url: string;
		}
	>;
};

export type KnowledgePanelElement = KnowledgeElementBase & {
	element_type: 'panel';
	panel_element: {
		panel_id: string;
	};
};

export type KnowledgeTableElement = KnowledgeElementBase & {
	element_type: 'table';
	table_element: {
		id: string;
		title: string;
		rows: {
			values: { text: string; evaluation?: string }[];
		}[];
		columns: {
			type: string;
			text: string;
			text_for_small_screen: string;
			style: string;
			column_group_id: string;
			shown_by_default: boolean;
		}[];
	};
};

export type KnowledgeActionElement = KnowledgeElementBase & {
	element_type: 'action';
	action_element: {
		actions: string[];
		html: string;
	};
};

export type KnowledgeMapElement = KnowledgeElementBase & {
	element_type: 'map';
	map_element: {
		pointers: {
			geo: { lat: number; lng: number };
		}[];
	};
};
