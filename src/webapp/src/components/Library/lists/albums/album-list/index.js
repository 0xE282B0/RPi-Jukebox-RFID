import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  List,
  Typography,
} from '@mui/material';

import AlbumListItem from './album-list-item';

const AlbumList = ({ albums, musicFilter }) => {
  const { t } = useTranslation();

  if (albums?.length) {
    return (
      <List sx={{ width: '100%' }}>
        {albums.map(({ albumartist, album }, i) => (
          <AlbumListItem
            key={i}
            albumartist={albumartist}
            album={album}
          />
        ))}
      </List>
    );
  }

  if (musicFilter) return <Typography>{`☝️  ${t('library.albums.unknown-artist')}`}</Typography>
  return <Typography>{`${t('library.albums.unknown-artist')} 🙈`}</Typography>
}

export default React.memo(AlbumList);
