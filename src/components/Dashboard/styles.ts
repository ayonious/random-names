import styled from 'styled-components';
import { theme, siteMaxWidth } from '../../../config';
export const FormWrapper = styled.div``;

export const SelectItemWrapper = styled.div`
  width: ${siteMaxWidth}; ;
`;

export const SelectTitleWrapper = styled.div`
  width: ${siteMaxWidth};
  margin-left: 10px;
  margin-top: 5px;
  color: ${theme.fontColor.light};
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const PageWrapper = styled.div`
  margin: 50px;
`;

export const CustomSelectStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    background: state.isSelected
      ? theme.primaryColor
      : state.isFocused
      ? theme.primaryLightColor
      : 'white',
  }),
};
