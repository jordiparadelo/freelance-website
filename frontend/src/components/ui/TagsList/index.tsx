'use client';

import { FC } from 'react';
import styles from './styles.module.scss';
import {Tags}  from '@/types';

interface TagsListProps {
  tags: Tags[];
  className?: string;
}

const TagsList: FC<TagsListProps> = ({ tags, className = '' }) => {
  return (
    <ul className={`${styles.tagsList} ${className}`}>
      {tags.map((tag) => (
        <button key={tag.id} className={styles.tag + ' ' + '.button button--secondary'}>
          {tag.label}
        </button>
      ))}
    </ul>
  );
};

export default TagsList; 