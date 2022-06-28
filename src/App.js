import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue='<p>This is the initial content of the editor.</p>'
                init={{
                    height: 500,
                    menubar: true,
                    skin: 'oxide-dark',
                    plugins: [
                        'advlist', 'autolink', 'autosave', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'codetoolbar', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount', 'emoticons', 'codesample', 'quickbars'
                    ],
                    advlist_number_styles: 'lower-alpha, lower-roman, upper-alpha, upper-roman',
                    hilitecolor: { inline: 'span', classes: 'hilitecolor', styles: { backgroundColor: '%value' } },
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | emoticons code codesample | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help | restoredraft | quickimage quicktable',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    autosave_ask_before_unload: true,
                    quickbars_selection_toolbar: true
                }}
            />
            <button onClick={log}>Log editor content</button>
        </>
    );
}