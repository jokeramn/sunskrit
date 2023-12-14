import React from 'react';
import styles from './cross-icon.module.scss';
import cx from "classnames";

interface CrossIconProps {
    width: number;
    height: number;
    className?: string;
    onClick: () => void;
}

export const CrossIcon: React.FC<CrossIconProps> = ({width, height, className, onClick}) => {
    const iconStyle: React.CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
    };

    return (
        <div onClick={onClick} className={cx(styles.crossIcon, className)} style={iconStyle}>
            <div className={cx(styles.line, styles.line1)}></div>
            <div className={cx(styles.line, styles.line2)}></div>
        </div>
    );
};
