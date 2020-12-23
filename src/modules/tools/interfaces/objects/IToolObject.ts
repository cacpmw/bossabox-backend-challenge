import Tag from '@modules/tags/infrastructure/typeorm/entities/Tag';

export default interface IToolObject {
    title: string;
    link: string;
    description: string;
    tags?: Tag[];
}
