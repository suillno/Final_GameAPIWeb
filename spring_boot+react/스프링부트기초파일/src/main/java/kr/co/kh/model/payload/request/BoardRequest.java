package kr.co.kh.model.payload.request;

import kr.co.kh.model.vo.UploadFile;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class BoardRequest {

    private Long id;
    private Long code;
    private String title;
    private String content;
    private String startDate;
    private String endDate;
    private Long[] files;
    private String fileTarget;
    private List<UploadFile> fileList;

}
