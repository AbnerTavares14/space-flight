import styled from 'styled-components';
import dayjs from 'dayjs';

export default function Articles(props) {
    const { idx, image, url, title, summary, newsSite, publishedAt } = props;
    const date = dayjs(publishedAt).format('DD-MM-YYYY');

    return idx % 2 === 0 ? (
        <>
            <A href={url}>
                <Article justifyContent={'flex-start'}>
                    <img src={image} alt="" />
                    <div className='infoArticle'>
                        <h1>{title}</h1>
                        <div className='published'>
                            <div className='dateOfPublished'>
                                <h3>{date}</h3>
                            </div>
                            <div className='newsSite'>
                                <h2>{newsSite}</h2>
                            </div>
                        </div>
                        <p>{summary}</p>
                    </div>
                </Article>
            </A>
        </>
    ) :
        (
            <>
                <A href={url}>
                    <Article justifyContent={'flex-end'}>
                        <div className='infoArticle'>
                            <h1>{title}</h1>
                            <div className='published'>
                                <div className='dateOfPublished'>
                                    <h3>{date}</h3>
                                </div>
                                <div className='newsSite'>
                                    <h2>{newsSite}</h2>
                                </div>
                            </div>
                            <p>{summary}</p>
                        </div>
                        <img src={image} alt="" />
                    </Article>
                </A>
            </>
        )

}

const A = styled.a`
    text-decoration: none;
`

const Article = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent};
    img {
        width: 120px;
        height: 120px;
        margin-right: 40px;
        margin-left: 40px;
    }
    margin-top: 70px;
    margin-bottom: 50px;
    padding: 0 20px;
    
    .infoArticle {
        display: flex;
        flex-direction: column;
        h1 {
            font-family: 'Roboto Condensed', sans-serif;
            color: #1E2022;
            font-weight: 700;
            font-size: 20px;
        }
    
        
        p {
            font-family: 'Roboto Condensed', sans-serif;
            color: #1E2022;
            font-weight: 700;
            font-size: 14px;
        }
        
        
        h2 {
            font-family: 'Roboto Condensed', sans-serif;
            color: #1E2022;
            font-weight: 700;
            font-size: 12px;
        }

        .newsSite {
            box-sizing: border-box;
            border: 1px solid #1E2022;
            background-color: #302E53;
        }

        .published {
            display: flex;
            justify-content: space-between;
        }

        .dateOfPublished {
            h3 {
                font-family: 'Roboto Condensed', sans-serif;
                color: #302E53;
                font-weight: 400;
                font-size: 10px;
            }
        }
        
    }
`;