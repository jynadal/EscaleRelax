export interface AppLinks {
    label: string;
    baseUrl: string;
    type: string; //Todo refactor this
}

export interface FooterLinks {
    label: string;
    links: AppLinks[];
}