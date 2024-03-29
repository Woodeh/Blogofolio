import { FC } from 'react';
import './SearchCard.scss';
import { DateCard } from '../../../../components/DateCard/DateCard';
import { Typography } from '../../../../components/Typography/Typography';
import { ActionsCard } from '../../../../components/ActionsCard/ActionsCard';
import { useNavigate } from 'react-router-dom';

interface ISearchCard {
    id: number;
    title: string;
    image: string;
    date: string;
    like: number;
    dislike: number;
    isFavorite: boolean;
}

export const SearchCard: FC<ISearchCard> = ({id, date, image, title, dislike, like, isFavorite}) => {
    const navigate = useNavigate();

    return (
        <div className='search-card'>
            <div className="search-card__content">
                <div>
                    <div className="search-card__img-box">
                        <img className='search-card__img' src={image} alt={title} />
                    </div>
                </div>
                <div>
                    <DateCard date={date}/>
                    <button className='search-card__btn' onClick={() => navigate(`/posts/${id}`)}>
                        <Typography content={title} type='H3'/>
                    </button>
                </div>
            </div>
            <ActionsCard id={id} like={like} dislike={dislike} isFavorite={isFavorite} />
        </div>
    )
};
