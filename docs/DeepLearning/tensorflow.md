ft.norm函数用于计算向量矩阵和张量的范数

默认`tf.norm( tensor, ord='euclidean', axis=None, keep_dims=False, name=None )`



最好使用tf.reduce_mean(),而不是使用 np.mean()