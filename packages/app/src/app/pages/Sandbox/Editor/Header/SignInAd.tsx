import React, { useEffect, useState } from 'react';
import css from '@styled-system/css';
import { Stack, Text, Button } from '@codesandbox/components';
import { useOvermind } from 'app/overmind';
import track from '@codesandbox/common/lib/utils/analytics';
import { motion, AnimatePresence } from 'framer-motion';

export const SignInBanner = () => {
  const { actions } = useOvermind();
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      setShow(true);
      // 3 minutes
    }, 180000);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -70 }}
          exit={{ y: -70 }}
          transition={{ ease: 'easeOut' }}
        >
          <Stack
            padding={4}
            css={css({
              position: 'absolute',
              backgroundColor: 'white',
              width: '100vw',
              height: 49,
              alignItems: 'center',
              color: 'grays.400',
              zIndex: 9999,
            })}
          >
            <Stack
              align="center"
              justify="space-between"
              css={css({ width: '100%' })}
            >
              <Stack gap={4} align="center">
                <Stack
                  paddingY={1}
                  paddingX={2}
                  css={css({
                    color: 'white',
                    backgroundColor: 'blues.500',
                    textAlign: 'center',
                    fontSize: '1',
                    borderRadius: 'small',
                  })}
                >
                  Tip
                </Stack>
                <Text>
                  Register to save your work, code on any device, deploy, and
                  collaborate
                </Text>
              </Stack>
              <Stack gap={4}>
                <Button
                  autoWidth
                  css={css({
                    color: 'blues.500',
                    ':hover:not(:disabled), :focus:not(:disabled)': {
                      color: 'blues.500',
                    },
                  })}
                  onClick={() => {
                    track('Header Sign In Ad Clicked');
                    actions.signInClicked();
                  }}
                  variant="link"
                >
                  Sign in to Save
                </Button>
                <Button
                  css={css({
                    width: 6,
                    padding: 0,
                    display: 'block',
                  })}
                  variant="link"
                  padding={0}
                  onClick={() => setShow(false)}
                >
                  <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                    <path
                      fill="#999"
                      d="M17.508 7.301l-1.083-1.09-4.872 4.909-4.871-4.91-1.083 1.091 4.872 4.91-4.872 4.909 1.083 1.09 4.871-4.909 4.872 4.91 1.082-1.091-4.871-4.91 4.872-4.909z"
                    />
                  </svg>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
