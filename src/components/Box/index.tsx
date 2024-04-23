import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: salmon;
`;

export function Box() {
  return (
    <Container /* animate={{ scale: 2 }} transition={{ duration: 0.5 }} */ />
  );
}
