/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react';
import { ContainerBox, PageTitle, PageWidth } from '../../common/common.styled';
import { ContainerNotes } from '../notes/notes.styled';
import { ThemeContext } from '../theme/themeProvider';
import {
  Result,
  Image,
  ImgWrapper,
  Input,
  Label,
  UploadText,
} from './create.styled';

export const Imgs = () => {
  const [selectedFiles, setSelectedFiles] = useState<JSX.Element[]>([]);
  const { theme } = useContext(ThemeContext);

  const handleImageChange = (e: any): void => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (files) {
      const filesArray = Array.from(files).map(file =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImages: any) => prevImages.concat(filesArray));
      Array.from(files).map((file: any) => URL.revokeObjectURL(file));
    }
  };

  const renderPhotos = (source: any) => {
    return source.map((photo: any) => {
      return (
        <ImgWrapper key={photo}>
          <Image src={photo} alt='added image' />
        </ImgWrapper>
      );
    });
  };

  return (
    <PageWidth>
      <PageTitle>Upload images</PageTitle>
      <ContainerBox theme={theme}>
        <ContainerNotes>
          <Label>
            <UploadText>Click me to upload image</UploadText>
            <Input type='file' multiple onChange={handleImageChange} />
          </Label>
          <Result>{renderPhotos(selectedFiles)}</Result>
        </ContainerNotes>
      </ContainerBox>
    </PageWidth>
  );
};
