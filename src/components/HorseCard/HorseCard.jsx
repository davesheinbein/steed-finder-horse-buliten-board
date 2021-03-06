import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HorseCard.module.css'

function HorseCard({ horse, handleDeleteHorse, user }) {
    return (
        <div className={styles.horseCard}>
            <div className={styles.panel}>
                <div className={styles.panelHeading}>
                    <div className={styles.panelTitle}>{horse.name}</div>
                    <div>
                        {horse.image && <span>
                            <img src={`${horse.image}`} alt='Not Found' className={styles.heroImage} />
                        </span>}
                    </div>
                </div>
                <div className={styles.panelBody}>
                    <dl>
                        <div className={styles.reAlign}>
                            <dt className={styles.contentTitles}>Name: </dt>
                            <dd>{horse.name}</dd>
                        </div>
                        <div className={styles.reAlign}>
                            <dt className={styles.contentTitles}>Age: </dt>
                            <dd>{horse.age} Years Old</dd>
                        </div>
                        <div className={styles.reAlign}>
                            <dt className={styles.contentTitles}>Breed: </dt>
                            <dd>{horse.categories}</dd>
                        </div>
                        <div className={styles.reAlign}>
                            <dt className={styles.contentTitles}>Price: </dt>
                            <dd>$ {horse.price}</dd>
                        </div>
                        <div className={styles.reAlign}>
                            <dt className={styles.contentTitles}>Location:</dt>
                            <dd>{horse.location}</dd>
                        </div>
                        <div className={styles.reAlign}>
                            <dt className={styles.contentTitles}>Contact #:</dt>
                            <dd>{horse.contact}</dd>
                        </div>
                    </dl>
                </div>
                <div className={styles.panelFooter}>
                    {
                        horse.user === user._id ?
                            <Link
                                className={styles.panelEditBtn}
                                to={{
                                    pathname: '/edit',
                                    state: { horse }
                                }}
                            >
                                EDIT
                            </Link> : null
                    }

                    <Link
                        to='/marketplace'
                        className={styles.panelReturnBtn}
                    >
                        RETURN TO LIST
                    </Link>

                    {
                        horse.user === user._id ?
                            <button
                                className={styles.panelDeleteBtn}
                                onClick={() => handleDeleteHorse(horse._id)} //breaks code need to figure out how to make sure props is being passed.
                            >
                                DELETE
                            </button> : null
                    }
                </div>
            </div>
        </div>
    )
}
export default HorseCard;