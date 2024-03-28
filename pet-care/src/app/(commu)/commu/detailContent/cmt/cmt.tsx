// Cmt.tsx
import React from 'react';
import styles from './cmt.module.css';

export default function Cmt() {
  return (
    <div className={styles.articleComments}>
      <h3>댓글 0</h3>
      <div className={styles.writeArea}>
        <div id="btn_add_comment" style={{ display: 'none' }}>
          <div className={styles.replyArea}>
            <button type="button" className={styles.btnReply}>댓글을 남겨주세요.</button>
          </div>
        </div>
        <div className={styles.form}>
          <div id="comment_apply" style={{ display: 'block' }}>
            <div className={styles.replyArea}>
              <form id="comment_fo" name="comment_fo" encType="multipart/form-data">
                <div className={styles.replyIng}>
                  <span className={styles.attachFile}>
                    <label htmlFor="inpfile">
                      <i className={styles.blind}>파일 첨부하기</i>
                    </label>
                    <input id="inpfile" type="file" name="file" accept="image/gif, image/jpeg, image/png" />
                  </span>
                  <div className={styles.txtara}>
                    <textarea id="content" name="content" placeholder="댓글을 남겨주세요." />
                  </div>
                  <div className={styles.fncUx}>
                    <div className={styles.hideItem}>
                      <ul className={styles.list}>
                        <li>
                          <div className={styles.hidecompanyItem}>
                            {/* <div className={styles.checkBx}>
                              <input type="checkbox" id="inpcp" name="hide_company" className={styles.inpChk} />
                              <label htmlFor="inpcp" className={styles.inpLb}>
                                <div className={styles.labelContext}>회사명 비공개</div>
                              </label>
                            </div> */}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.btnGroup}>
                      <button type="button" className={styles.btnCncl}>취소</button>
                      <button type="button" disabled className={styles.btnPost}>등록</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
