import styles from './general-menu.module.scss';
import React from "react";
import { shishas } from "shared/model/data";
import { Text, Title } from "shared/ui";

export const GeneralMenu = () => {


    return (
        <div className={styles.root}>
            <section className={styles.container}>
                <Title level={1} color='secondary' style={{fontSize: '22px', paddingTop: '35px'}}>
                    {shishas.title}
                </Title>
                <ul style={{marginTop: '35px'}}>
                    {shishas.menu.map((item) => {
                        return (
                            <li key={item.id} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',

                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginRight: '20px'
                                    }}>
                                        <Text color='primary' style={{
                                            width: '27px',
                                            textAlign: 'center',
                                            marginRight: '16px',
                                            fontWeight: '600'
                                        }}>
                                            {item.human.count}
                                        </Text>
                                        <img src={item.human.src} alt='человечек'/>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Text color='primary' style={{
                                            textAlign: 'center',
                                            marginRight: '16px',
                                            fontWeight: '600'
                                        }}>{item.hookah.count}</Text>
                                        <img src={item.hookah.src} alt='кальян'/>
                                    </div>
                                </div>
                                <div>{item.price}</div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}
