from django.db import models

# Create your models here.
class Movie(models.Model):
    class Meta:
        #DBのテーブル名を指定する。マイグレーション時にmovieでテーブルが作られる。
        db_table    = "movie"

    #教科書P47~P48を参照
    #モデルフィールドを定義する。マイグレーションコマンドを実行をすることで、DBに反映できる。
    filename    = models.CharField(verbose_name="動画ファイル名",max_length=200)
    title       = models.CharField(verbose_name="動画タイトル",max_length=20)

    #管理画面で表示する時の文字列を定義する。
    #ここでは動画タイトル(title)を定義しているので、管理画面にアクセスするとDBに格納されてある動画タイトル全てが確認できる
    def __str__(self):
        return self.title

