import React from "react";

import { Modal } from "@components/organisms";
import { orange } from "@styles/constants";

import { TypedFollowMutation } from "./queries";
import * as S from "./styles";

interface IProps {
  isActive: boolean;
  setStt: (value: boolean) => void;
  storeId: string;
}

function FollowButton({ isActive, setStt, storeId }: IProps) {
  const [showModal, setShowModal] = React.useState(false);
  const [reRender, setRerender] = React.useState(false);

  return (
    <S.Wrapper>
      <S.WrapperContainer style={{ marginTop: "20px" }}>
        {storeId ? (
          <TypedFollowMutation
            onCompleted={() => {
              setRerender(true);
            }}
          >
            {(followStore, { data, loading }) => {
              if (reRender) {
                setRerender(false);
              }
              return (
                <>
                  <S.Button
                    isActive={isActive}
                    color={orange}
                    onClick={() => {
                      if (isActive) {
                        setShowModal(true);
                        return;
                      }
                      setStt(true);
                      followStore({
                        variables: { store: storeId, follow: true },
                      });
                    }}
                  >
                    {loading ? "Waiting" : isActive ? "Unfollow" : "Follow"}
                  </S.Button>

                  <div className="modal">
                    <Modal
                      submitButtonTestingContext="submitAddressFormModalButton"
                      testingContext="submitAddressFormModal"
                      title="Notify"
                      hide={() => {
                        setShowModal(false);
                      }}
                      disabled={false}
                      show={showModal}
                      submitBtnText="Yes"
                      cancelBtnText="No"
                      onSubmit={() => {
                        setShowModal(false);
                        setStt(false);
                        followStore({
                          variables: { store: storeId, follow: false },
                        });
                      }}
                      minHeight={155}
                      padding="1rem 1.8rem"
                    >
                      Do you want to unfollow ?
                    </Modal>
                  </div>
                </>
              );
            }}
          </TypedFollowMutation>
        ) : null}
      </S.WrapperContainer>
    </S.Wrapper>
  );
}

export default FollowButton;
