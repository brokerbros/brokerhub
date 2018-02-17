import React from 'react';

export const Uploader = () => {

    <div class="container">
        <div class="jumbotron mt-4">
            <h1 class=""><i class="fa fa-database mb-3" aria-hidden="true"></i> XLSX Parser</h1>
            <form id="excelForm" role="form" class="form" onsubmit="return false;">
                <div class="form-group">
                    <label for="file">Please upload a .xlsx file</label>
                    <input id="excelFile" type="file" name="excelFile" class="form-control" accept=".xlsx">
                </div>
                <button type="submit" class="btn btn-primary" id="upload">Upload</button>
            </form>
            <hr>
        </div>
    </div>

    <div class="modal fade" id="outputModal" tabindex="-1" role="dialog" aria-labelledby="outputModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="outputModalTitle">Parsed JSON</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="parsedResult"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

}

