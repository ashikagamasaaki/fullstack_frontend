export default function Page() {
    return(
        <>
            <h2>商品在庫一覧</h2>
            <h3>在庫処理</h3>
            <form>
                <div>
                    <label>商品名：</label>
                    <span>コットン100%バックリボンティアードワンピース（黒）</span>
                </div>
                <div>
                    <label>数量：</label>
                    <input type="text" />
                </div>
                <button>商品を仕入れる</button>
                <button>商品を卸す</button>
            </form>
            <h3>在庫履歴</h3>
            <table>
                <thead>
                    <tr>
                        <th>処理種別</th>
                        <th>処理日時</th>
                        <th>単価</th>
                        <th>数量</th>
                        <th>価格</th>
                        <th>在庫数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>卸し</td>
                        <td>2023-04-03 18:54:13</td>
                        <td>6900</td>
                        <td>2</td>
                        <td>13800</td>
                        <td>390</td>
                    </tr>
                    <tr>
                        <td>仕入れ</td>
                        <td>2023-04-03 18:54:13</td>
                        <td>6900</td>
                        <td>2</td>
                        <td>13800</td>
                        <td>390</td>
                    </tr>
                    <tr>
                        <td>卸し</td>
                        <td>2023-04-03 18:54:13</td>
                        <td>6900</td>
                        <td>2</td>
                        <td>13800</td>
                        <td>390</td>
                    </tr>
                    <tr>
                        <td>仕入れ</td>
                        <td>2023-04-03 18:54:13</td>
                        <td>6900</td>
                        <td>2</td>
                        <td>13800</td>
                        <td>390</td>
                    </tr>
                </tbody>
            </table>
            <p>商品在庫の一覧を表示する</p>
        </>
    )
}